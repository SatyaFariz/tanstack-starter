type RequestOptions = {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  data?: unknown; // For POST, PUT, PATCH requests
  timeout?: number;
  signal?: AbortSignal;
  onDownloadProgress?: (progressEvent: ProgressEvent) => void;
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
};

class Http {
  private static buildUrl(url: string, params?: Record<string, string | number>): string {
    if(!params || Object.keys(params).length === 0) {
      return url;
    }

    const urlObj = new URL(url);
    Object.entries(params).forEach(([key, value]) => {
      urlObj.searchParams.append(key, String(value));
    });

    return urlObj.toString();
  }

  private static request<T>(
    method: string,
    url: string,
    options: RequestOptions = {},
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const finalUrl = this.buildUrl(url, options.params);

      // Configure request
      xhr.open(method, finalUrl, true);

      // Set headers
      if(options.headers) {
        Object.entries(options.headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      // Set default content type for requests with data
      if(['POST', 'PUT', 'PATCH'].includes(method) && options.data) {
        if(!options.headers?.['Content-Type']) {
          xhr.setRequestHeader('Content-Type', 'application/json');
        }
      }

      // Set timeout
      if(options.timeout) {
        xhr.timeout = options.timeout;
      }

      // Handle abort signal
      if(options.signal) {
        if(options.signal.aborted) {
          reject(new DOMException('Request was aborted', 'AbortError'));
          return;
        }

        const abortHandler = () => {
          xhr.abort();
          reject(new DOMException('Request was aborted', 'AbortError'));
        };

        options.signal.addEventListener('abort', abortHandler);

        // Clean up event listener when request completes
        xhr.addEventListener('loadend', () => {
          options.signal?.removeEventListener('abort', abortHandler);
        });
      }

      // Progress event handlers
      if(options.onDownloadProgress) {
        xhr.addEventListener('progress', options.onDownloadProgress);
      }

      if(options.onUploadProgress && xhr.upload) {
        xhr.upload.addEventListener('progress', options.onUploadProgress);
      }

      // Handle response
      xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          try {
            // Try to parse as JSON first
            const contentType = xhr.getResponseHeader('Content-Type') || '';
            let response: T;

            if(contentType.includes('application/json')) {
              response = JSON.parse(xhr.responseText);
            } else {
              // Return as string for non-JSON responses
              response = xhr.responseText as unknown as T;
            }

            resolve(response);
          } catch {
            // If JSON parsing fails, return raw text
            resolve(xhr.responseText as unknown as T);
          }
        } else {
          const error = new Error(`HTTP Error: ${xhr.status} ${xhr.statusText}`);
          const customError = error as Error & { status?: number; statusText?: string; response?: string };
          customError.status = xhr.status;
          customError.statusText = xhr.statusText;
          customError.response = xhr.responseText;
          reject(error);
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };

      xhr.ontimeout = () => {
        reject(new Error('Request Timeout'));
      };

      // Send request
      let body: string | FormData | null = null;
      if(options.data !== undefined) {
        if(options.data instanceof FormData) {
          body = options.data;
        } else if(typeof options.data === 'string') {
          body = options.data;
        } else {
          body = JSON.stringify(options.data);
        }
      }

      xhr.send(body);
    });
  }

  static async get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('GET', url, options);
  }

  static async post<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('POST', url, options);
  }

  static async put<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('PUT', url, options);
  }

  static async patch<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('PATCH', url, options);
  }

  static async delete<T>(url: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>('DELETE', url, options);
  }
}

export default Http;