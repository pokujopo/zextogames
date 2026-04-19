import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/game/AuthForm';
import { useRegister } from '@/hooks/useAuth';

function RegisterPage() {
  const [values, setValues] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const register = useRegister();
  const navigate = useNavigate();

  const onChange = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!values.username) nextErrors.username = 'Username is required';
    if (!values.email) nextErrors.email = 'Email is required';
    if (!values.password || values.password.length < 6) nextErrors.password = 'Password must be at least 6 characters';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    await register.mutateAsync(values);
    navigate('/profile');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Create account</p>
        <h1 className="mt-3 text-4xl font-bold">Join ZextoGames</h1>
        <p className="mt-2 text-text-muted">Polished onboarding flow with future backend auth expansion ready.</p>
      </div>
      <AuthForm
        fields={[{ name: 'username', label: 'Username', placeholder: 'zexto_player' }, { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' }, { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a strong password' }]}
        values={values}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
        isLoading={register.isPending}
        submitLabel="Create account"
        footer={<p className="text-sm text-text-muted">Already have an account? <Link className="text-primary" to="/login">Sign in</Link></p>}
      />
    </div>
  );
}

export default RegisterPage;
