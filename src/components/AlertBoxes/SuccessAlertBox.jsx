import React, { useEffect, useState } from 'react';
import { MdVerified } from 'react-icons/md';

const SuccessAlertBox = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-close the alert after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose(); // Call the onClose callback if provided
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-10 inset-x-0 flex justify-center z-50">
      <div className="py-2 px-4  text-black bg-white rounded-lg shadow-lg border border-green-600 max-w-lg mx-auto">
        <div className="flex items-center">
          <MdVerified className="text-green-500 mr-2 text-2xl" />
          <span className="font-semibold">{message}</span>
          <button
            onClick={() => {
              setIsVisible(false);
              if (onClose) onClose();
            }}
            className="ml-auto text-white focus:outline-none"
          >
            &times; {/* Close button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlertBox;
