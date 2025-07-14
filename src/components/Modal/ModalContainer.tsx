'use client';
import { X } from 'lucide-react';
import { ReactNode, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { ModalContext } from './ModalContext';

interface ModalContainerProps {
  children: ReactNode;
  className?: string;
}

export function ModalContainer({ children, className }: ModalContainerProps) {
  const { isOpen, closeModal, modalId } = useContext(ModalContext);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? closeModal() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [closeModal]);

  if (!isOpen) return null;
  if (!modalId) return null;

  const element = document.getElementById(modalId);

  if (!element) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div
        className={twMerge(
          'relative max-w-[80%] min-w-[600px] rounded-md bg-white p-3 shadow',
          className,
        )}
      >
        <div className="gap relative flex flex-col">{children}</div>
        <button
          className="absolute top-1 right-1 rounded-sm p-1 text-slate-400 transition duration-200 hover:bg-slate-200 hover:text-slate-800"
          onClick={() => closeModal()}
        >
          <X size={24} />
        </button>
      </div>
    </div>,
    element,
  );
}
