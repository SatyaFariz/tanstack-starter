import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { authClient } from '@/utils/auth-client';
import toast from 'react-hot-toast';

type LoginPayload = {
  email: string;
  password: string;
};

export const useLoginWithEmailMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginPayload) => {
      const { error, data: response } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return response;
    },
    onSuccess: (response) => {
      toast.success(`Hey ${response.user.name}, welcome back!`);
      queryClient.invalidateQueries();
      router.invalidate();
    },
    onError: (error) => {
      toast.error(`Login error: ${error.message}`);
    },
  });

  return loginMutation;
};