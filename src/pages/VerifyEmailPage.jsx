import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

function VerifyEmailPage() {
  return (
    <div className="panel space-y-5 p-8 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-primary">Email verification</p>
      <h1 className="text-4xl font-bold">Verify your email</h1>
      <p className="text-text-muted">This placeholder page is ready to connect to your backend verification flow and resend-email endpoint.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button>Resend verification</Button>
        <Button variant="secondary" as={Link} to="/login">Back to login</Button>
      </div>
    </div>
  );
}

export default VerifyEmailPage;
