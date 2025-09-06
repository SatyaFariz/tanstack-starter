/* eslint-disable no-console */
import { createFileRoute, useRouter, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if(context.userSession) {
      throw redirect({ to: '/' });
    }
  },
});
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '@/vault/services/sign-up'; // Adjust path as needed
import TextField from '@/components/ui/field/textfield';
import PasswordField from '@/components/ui/passwordfield';
import Button from '@/components/ui/button';
import { z } from 'zod';
import Link from '@/components/ui/link';
import { Mail, Lock, UserPlus } from 'lucide-react';
import FieldDescription from '@/components/ui/field/field-description';
import { toastifyResponseMessages } from '@/utils/toast';

// Email validation schema using Zod
const emailSchema = z.email();

function RouteComponent() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: (formData: { email: string; password: string }) => signUp({ data: formData }),
    onSuccess: async (data) => {
      toastifyResponseMessages(data);
      await queryClient.invalidateQueries();
      await router.invalidate();
    },
    onError: (error) => {
      console.error('Signup failed:', error);
    },
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      await signupMutation.mutateAsync({ email, password });
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="text-slate-600 mt-2">Sign up to access your dashboard</p>
        </div>

        {/* Signup Form Card */}
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
                    indicator="*"
                    type="email"
                    defaultValue={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    errorMessage={field.state.meta.errors.join(', ')}
                    isInvalid={field.state.meta.errors.length > 0}
                    startAdornment={<Mail size={18} />}
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
                  } else if(value.length < 8) {
                    return 'Password must be at least 8 characters';
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <PasswordField
                    label="Password"
                    placeholder="Enter your password"
                    indicator="*"
                    defaultValue={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    errorMessage={field.state.meta.errors.join(', ')}
                    isInvalid={field.state.meta.errors.length > 0}
                    description={
                      <FieldDescription>
                        Password must be at least 8 characters long.
                      </FieldDescription>
                    }
                    startAdornment={<Lock size={18} />}
                  />
                </div>
              )}
            </form.Field>

            <form.Field
              name="confirmPassword"
              validators={{
                onChange: ({ value, fieldApi }) => {
                  if(!value.trim()) {
                    return 'Please confirm your password';
                  }
                  const password = fieldApi.form.getFieldValue('password');
                  if(value !== password) {
                    return 'Passwords do not match';
                  }
                  return undefined;
                },
              }}
            >
              {(field) => (
                <div className="space-y-2">
                  <PasswordField
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    indicator="*"
                    defaultValue={field.state.value}
                    onChange={(val) => field.handleChange(val)}
                    errorMessage={field.state.meta.errors.join(', ')}
                    isInvalid={field.state.meta.errors.length > 0}
                    startAdornment={<Lock size={18} />}
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
                    isDisabled={!canSubmit || signupMutation.isPending}
                    isPending={isSubmitting || signupMutation.isPending}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting || signupMutation.isPending ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </div>
              )}
            </form.Subscribe>
          </form>

          {/* Additional Links */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{' '}
                <Link
                  to="/backend/login"
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
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