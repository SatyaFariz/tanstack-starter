import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { authClient } from '@/utils/auth-client'

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await authClient.signOut()
      await queryClient.invalidateQueries()
      router.invalidate()
    },
    onError: (error) => {
      console.error('Logout error:', error)
      // Still invalidate queries and router even if signOut fails
      queryClient.invalidateQueries()
      router.invalidate()
    }
  })

  return logoutMutation
}