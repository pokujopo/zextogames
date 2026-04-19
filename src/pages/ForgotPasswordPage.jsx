import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '@/components/game/AuthForm';

function ForgotPasswordPage() {
  const [values, setValues] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.email) return setErrors({ email: 'Email is required' });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Password recovery</p>
        <h1 className="mt-3 text-4xl font-bold">Forgot your password?</h1>
        <p className="mt-2 text-text-muted">UI is ready for backend integration with `/auth/forgot-password`.</p>
      </div>
      <AuthForm
        fields={[{ name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' }]}
        values={values}
        errors={errors}
        onChange={(name, value) => setValues({ [name]: value })}
        onSubmit={onSubmit}
        isLoading={false}
        submitLabel="Send reset link"
        footer={submitted ? <p className="text-sm text-success">Reset instructions placeholder sent.</p> : <p className="text-sm text-text-muted">Remembered it? <Link className="text-primary" to="/login">Back to login</Link></p>}
      />
    </div>
  );
}

export default ForgotPasswordPage;
