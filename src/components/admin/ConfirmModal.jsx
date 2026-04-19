import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';

function ConfirmModal({ open, onClose, onConfirm, title = 'Confirm action', message = 'Are you sure?' }) {
  return (
    <Modal open={open} onClose={onClose} title={title}>
      <p className="text-text-muted">{message}</p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
