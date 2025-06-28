import {
  BellRing,
  CircleAlert,
  CircleCheck,
  CircleX,
  Info,
} from 'lucide-react';
import { toast, ToastOptions } from 'react-toastify';

interface NotificationProps extends ToastOptions {
  message: string;
  description?: string;
}

type MessageProps = {
  message: string;
  description?: string;
  type?: string;
};

const Message = ({ message, description, type }: MessageProps) => (
  <div className="flex items-start gap-2">
    <figure className="pt-2">
      {type === 'success' ? (
        <CircleCheck size={18} />
      ) : type === 'error' ? (
        <CircleX size={18} />
      ) : type === 'warning' ? (
        <CircleAlert size={18} />
      ) : type === 'info' ? (
        <Info size={18} />
      ) : (
        <BellRing size={18} />
      )}
    </figure>
    <div>
      <div className="text-sm font-semibold">{message}</div>
      {description && (
        <div className="text-sm text-white/50">{description}</div>
      )}
    </div>
  </div>
);

export function notification(notify: NotificationProps) {
  const options = {
    type: notify.type || 'default',
    position: notify.position || 'top-center',
    autoClose: notify.autoClose ?? 5000,
    hideProgressBar: notify.hideProgressBar || false,
    closeOnClick: notify.closeOnClick || true,
    pauseOnHover: notify.pauseOnHover || true,
    style: {
      fontFamily: 'inherit',
    },
  };
  toast(
    Message({
      message: notify.message,
      description: notify.description,
      type: notify.type,
    }),
    options,
  );
}
