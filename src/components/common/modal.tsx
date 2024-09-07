import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-xs'
      onClick={onClose}
    >
      <div
        className='m-4 flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-md mb-4 font-bold'>Appointment Booked</h2>
        <p className='mb-4'>Your appointment has been successfully booked.</p>
        <button
          className='rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
