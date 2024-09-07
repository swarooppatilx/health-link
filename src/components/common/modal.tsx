import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black text-xs'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg p-3 shadow-lg flex flex-col items-center justify-center m-4'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-md font-bold mb-4'>Appointment Booked</h2>
        <p className='mb-4'>Your appointment has been successfully booked.</p>
        <button
          className='bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
