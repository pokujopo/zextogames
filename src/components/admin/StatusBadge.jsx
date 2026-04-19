import Badge from '@/components/ui/Badge';

function StatusBadge({ status }) {
  const variant = status === 'active' ? 'success' : status === 'draft' ? 'info' : 'default';
  return <Badge variant={variant}>{status}</Badge>;
}

export default StatusBadge;
