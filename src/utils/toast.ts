import type { Response } from '@/types/response';
import toast from 'react-hot-toast';

export function toastifyResponseMessages<T>(response: Response<T>) {
  if(response.messages) {
    for(const message of response.messages) {
      toast[message.type](message.message, {
        duration: 5000,
      });
    }
  }
  return response;
}