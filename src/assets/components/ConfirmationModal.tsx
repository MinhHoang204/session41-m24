import React from 'react';

interface Props {
  action: 'block' | 'unblock' | 'delete' | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<Props> = ({ action, onConfirm, onCancel }) => {
  const getMessage = () => {
    switch (action) {
      case 'block':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      case 'unblock':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      case 'delete':
        return 'Bạn có chắc chắn muốn xóa tài khoản này?';
      default:
        return '';
    }
  };

  return (
    <div className="modal">
      <p>{getMessage()}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationModal;