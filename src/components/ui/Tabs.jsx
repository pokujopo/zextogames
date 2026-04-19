import { cn } from '@/lib/utils';

function Tabs({ tabs, value, onChange, className }) {
  return (
    <div className={cn('inline-flex rounded-2xl border border-white/10 bg-white/5 p-1', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={cn(
            'rounded-xl px-4 py-2 text-sm transition',
            value === tab.value ? 'bg-primary text-white shadow-glow' : 'text-text-muted hover:text-text-primary',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
