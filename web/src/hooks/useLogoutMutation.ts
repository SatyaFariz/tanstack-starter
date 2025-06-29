import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { authClient } from '@/utils/auth-client'
import toast from 'react-hot-toast'

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await authClient.signOut()
    },
    onSuccess: () => {
      queryClient.clear()
      router.invalidate()
    },
    onError: (error) => {
      toast.error(`Logout error: ${error.message}`)
    }
  })

  return logoutMutation
}