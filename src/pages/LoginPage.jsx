import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/game/AuthForm';
import { useLogin } from '@/hooks/useAuth';

function LoginPage() {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const login = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!values.email) nextErrors.email = 'Email is required';
    if (!values.password) nextErrors.password = 'Password is required';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    await login.mutateAsync(values);
    navigate(location.state?.from || '/profile');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Welcome back</p>
        <h1 className="mt-3 text-4xl font-bold">Log in to continue</h1>
        <p className="mt-2 text-text-muted">Access favorites, recent activity, and protected routes.</p>
      </div>
      <AuthForm
        fields={[{ name: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com' }, { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' }]}
        values={values}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={login.isPending}
        submitLabel="Login"
        footer={<p className="text-sm text-text-muted">Forgot your password? <Link className="text-primary" to="/forgot-password">Reset it</Link></p>}
      />
      <p className="text-sm text-text-muted">No account yet? <Link to="/register" className="text-primary">Create one</Link></p>
    </div>
  );
}

export default LoginPage;
