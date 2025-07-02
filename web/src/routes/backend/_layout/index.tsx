import { useLogoutMutation } from '@/hooks/useLogoutMutation';
import { createFileRoute } from '@tanstack/react-router';
import Button from '@/components/ui/button';

export const Route = createFileRoute('/backend/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  const logoutMutation = useLogoutMutation();
  return (
      <div>
        <Button
          onPress={() => logoutMutation.mutate()}
          loading={logoutMutation.isPending}
        >
          Logout
        </Button>
      </div>
  );
}
