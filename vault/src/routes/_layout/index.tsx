// app/routes/index.tsx

import Button from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { logout } from 'vault/services/logout';
import { toastifyResponseMessages } from '@/utils/toast';

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => logout(),
    onSuccess: async (data) => {
      toastifyResponseMessages(data);
      await queryClient.invalidateQueries();
      await router.invalidate();
    },
  });

  return (
    <div className="flex items-center justify-center h-dvh p-6">
      <Button
        onPress={() => mutation.mutate()}
        isPending={mutation.isPending}
      >
        Log out
      </Button>
    </div>
  );
}