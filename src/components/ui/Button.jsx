import { cn } from '@/lib/utils';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'btn-base bg-destructive text-white hover:bg-destructive/90',
};

function Button({ children, className, variant = 'primary', as: Comp = 'button', ...props }) {
  return (
    <Comp className={cn(variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
