import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';

function AuthForm({ fields, values, errors, onChange, onSubmit, isLoading, submitLabel, footer }) {
  return (
    <form onSubmit={onSubmit} className="panel space-y-5 p-6 md:p-8">
      {fields.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={values[field.name]}
          onChange={(e) => onChange(field.name, e.target.value)}
          error={errors[field.name]}
          placeholder={field.placeholder}
        />
      ))}
      <div className="grid gap-3 sm:grid-cols-2">
        <Button type="button" variant="secondary">Continue with Google</Button>
        <Button type="button" variant="secondary">Continue with Discord</Button>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? 'Please wait...' : submitLabel}</Button>
      {footer}
    </form>
  );
}

export default AuthForm;
