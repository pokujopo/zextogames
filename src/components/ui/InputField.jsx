import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

function InputField({ label, error, type = 'text', className = '', ...props }) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';

  return (
    <label className={`block space-y-2 ${className}`}>
      {label && <span className="text-sm font-medium text-text-primary">{label}</span>}
      <div className="relative">
        <input
          className={`input-base ${isPassword ? 'pr-12' : ''} ${error ? 'border-destructive/60 focus:ring-destructive/20' : ''}`}
          type={isPassword ? (visible ? 'text' : 'password') : type}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={visible ? 'Hide password' : 'Show password'}
            onClick={() => setVisible((prev) => !prev)}
            className="absolute inset-y-0 right-3 my-auto text-text-muted"
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </label>
  );
}

export default InputField;
