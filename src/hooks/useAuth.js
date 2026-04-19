import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/authService';
import { useAuthStore } from '@/store/useAuthStore';
import { useToastStore } from '@/store/useToastStore';

export function useLogin() {
  const setSession = useAuthStore((state) => state.setSession);
  const pushToast = useToastStore((state) => state.pushToast);

  return useMutation({
    mutationFn: authService.loginUser,
    onSuccess: (payload) => {
      setSession(payload.data || payload);
      pushToast({ title: 'Welcome back', message: 'Your account session is now active.', variant: 'success' });
    },
    onError: (error) => pushToast({ title: 'Login failed', message: error.message, variant: 'destructive' }),
  });
}

export function useRegister() {
  const setSession = useAuthStore((state) => state.setSession);
  const pushToast = useToastStore((state) => state.pushToast);

  return useMutation({
    mutationFn: authService.registerUser,
    onSuccess: (payload) => {
      setSession(payload.data || payload);
      pushToast({ title: 'Account created', message: 'You can now continue exploring games.', variant: 'success' });
    },
    onError: (error) => pushToast({ title: 'Registration failed', message: error.message, variant: 'destructive' }),
  });
}
