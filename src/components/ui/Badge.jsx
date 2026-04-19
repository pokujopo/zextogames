import { cn } from '@/lib/utils';

function Badge({ children, variant = 'default', className }) {
  const styles = {
    default: 'badge-base bg-white/5 text-text-primary',
    accent: 'badge-base bg-primary/10 text-primary border-primary/20',
    info: 'badge-base bg-accent/10 text-accent border-accent/20',
    success: 'badge-base bg-success/10 text-success border-success/20',
  };

  return <span className={cn(styles[variant], className)}>{children}</span>;
}

export default Badge;
