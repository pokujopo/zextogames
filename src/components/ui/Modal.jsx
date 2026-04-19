import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

function Modal({ open, onClose, title, children, className = '' }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className={`panel w-full max-w-3xl p-5 ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <Button variant="ghost" onClick={onClose} aria-label="Close modal">
                <X size={18} />
              </Button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
