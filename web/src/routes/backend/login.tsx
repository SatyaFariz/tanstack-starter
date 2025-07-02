import { createFileRoute, redirect } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { useLoginWithEmailMutation } from '@/hooks/useLoginWithEmailMutation';
import TextField from '@/components/ui/textfield';
import Button from '@/components/ui/button';
import { z } from 'zod';

// Email validation schema using Zod
const emailSchema = z.string().email();

export const Route = createFileRoute('/backend/login')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if(context.userSession) {
      throw redirect({ to: '/backend' });
    }
  },
});

function RouteComponent() {
  const loginMutation = useLoginWithEmailMutation();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await loginMutation.mutateAsync(value);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-slate-600 mt-2">Sign in to access your dashboard</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/50 p-8">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  if(!value) {
                    return 'Email is required';
                  } else if(!emailSchema.safeParse(value).success) {
                    return 'Please enter a valid email address';
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <TextField
                    label="Email"
                    placeholder="Enter your email"
                    requirementIndicator="*"
                    type="email"
                    defaultValue={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    errorMessage={field.state.meta.errors.join(', ')}
                    isInvalid={field.state.meta.errors.length > 0}
                  />
                </div>
              )}
            </form.Field>

            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => {
                  if(!value.trim()) {
                    return 'Password is required';
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <TextField
                    label="Password"
                    placeholder="Enter your password"
                    requirementIndicator="*"
                    type="password"
                    defaultValue={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    errorMessage={field.state.meta.errors.join(', ')}
                    isInvalid={field.state.meta.errors.length > 0}
                  />
                </div>
              )}
            </form.Field>

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    loading={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                  </Button>
                </div>
              )}
            </form.Subscribe>
          </form>

          {/* Additional Links */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="text-center">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Forgot your password?
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
}