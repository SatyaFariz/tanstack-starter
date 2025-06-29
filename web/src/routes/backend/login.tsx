import { createFileRoute, redirect } from '@tanstack/react-router'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authClient } from "@/utils/auth-client"
import { useForm } from '@tanstack/react-form'

type SignInSchema = {
  email: string;
  password: string;
}

const signIn = async (data: SignInSchema) => {
  const { error, data: response } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
  })

  if (error) {
    throw new Error(error.message)
  }

  return response
}

export const Route = createFileRoute('/backend/login')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.userSession) {
      throw redirect({ to: '/backend' })
    }
  },
})

function RouteComponent() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (response) => {
      // alert(`Hey ${response.user.name}, welcome back!`)

      queryClient.resetQueries()
      navigate({ to: '/backend' })
    },
  })

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as SignInSchema,
    onSubmit: async ({ value }) => {
      await signInMutation.mutateAsync(value)
    },
  })
  
  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
    >
      <form.Field
        name="email"
        children={(field) => (
          <input 
            name="Email" 
            placeholder="Enter your email"
            required 
            type="email"
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <form.Field
        name="password"
        children={(field) => (
          <input 
            name="Password" 
            placeholder="Enter your password"
            required 
            type="password" 
            defaultValue={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
      <button
        type='submit'
      >
        Login
      </button>
    </form>
  )
}
