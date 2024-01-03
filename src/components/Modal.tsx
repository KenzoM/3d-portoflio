"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return open
    ? createPortal(
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={onClose}
            />
            <div className="bg-white rounded-lg p-8 max-w-4xl7 mx-auto z-10 w-full md:w-10/12 h-full">
              <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
              {children}
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}
