import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlert, CircleCheck, Info, X } from 'lucide-react';
import { useToastStore } from '@/store/useToastStore';

const icons = {
  success: CircleCheck,
  destructive: CircleAlert,
  info: Info,
};

function ToastViewport() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed right-4 top-4 z-[60] flex w-full max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.variant] || Info;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              className="panel flex items-start gap-3 p-4"
            >
              <Icon className="mt-0.5 text-primary" size={18} />
              <div className="flex-1">
                <p className="font-semibold">{toast.title}</p>
                <p className="text-sm text-text-muted">{toast.message}</p>
              </div>
              <button onClick={() => removeToast(toast.id)} aria-label="Dismiss toast" className="text-text-muted">
                <X size={16} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ToastViewport;
