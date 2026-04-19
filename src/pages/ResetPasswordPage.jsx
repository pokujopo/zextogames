import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '@/components/game/AuthForm';

function ResetPasswordPage() {
  const [values, setValues] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!values.password || values.password.length < 6) nextErrors.password = 'Password must be at least 6 characters';
    if (values.password !== values.confirmPassword) nextErrors.confirmPassword = 'Passwords do not match';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-primary">Reset password</p>
        <h1 className="mt-3 text-4xl font-bold">Create a new password</h1>
      </div>
      <AuthForm
        fields={[{ name: 'password', label: 'New password', type: 'password', placeholder: 'New password' }, { name: 'confirmPassword', label: 'Confirm password', type: 'password', placeholder: 'Repeat password' }]}
        values={values}
        errors={errors}
        onChange={(name, value) => setValues((prev) => ({ ...prev, [name]: value }))}
        onSubmit={onSubmit}
        isLoading={false}
        submitLabel="Reset password"
        footer={submitted ? <p className="text-sm text-success">Password reset placeholder completed.</p> : <p className="text-sm text-text-muted">Go back to <Link className="text-primary" to="/login">login</Link></p>}
      />
    </div>
  );
}

export default ResetPasswordPage;
