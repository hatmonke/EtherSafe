import { Toast, toast } from "react-hot-toast";
import { explorerName, explorerUrl } from "@/utils/config";
import { Transition } from "@headlessui/react";
import Link from "next/link";

type NotificationProps = {
  txHash?: string;
  success: boolean;
  title: string;
  message: string;
};

type ToastProps = {
  success: boolean;
  duration: number;
  title: string;
  message: string;
  txHash?: string;
  t: Toast;
};

function TailwindToast({
  success,
  duration,
  title,
  message,
  txHash,
  t,
}: ToastProps) {
  const link = txHash ? `${explorerUrl}/tx/${txHash}` : undefined;
  const linkText = txHash ? `View on ${explorerName}` : undefined;
  const icon = success ? "✅" : "❌";

  setTimeout(() => {
    toast.dismiss(t.id);
  }, duration);

  return (
    <Transition
      show={t.visible}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={`pointer-events-auto flex w-full max-w-md rounded-lg bg-basebg shadow-lg ring-1 ring-primary ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">{icon}</div>
          <div className="flex-1 ml-3">
            <p className="text-sm font-medium text-primary">{title}</p>
            <p className="mt-1 text-sm text-text">{message}</p>
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-sm text-center text-text"
              >
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-l border-primary">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex items-center justify-center w-full p-4 text-sm font-medium border border-transparent rounded-none rounded-r-lg text-secondary hover:text-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary/80"
        >
          Close
        </button>
      </div>
    </Transition>
    /*     <div className="flex h-32 w-96 max-w-[80vw] flex-col items-center justify-center space-y-4 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-center text-gray-500">{message}</p>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-sm text-center text-gray-500"
          >
            {linkText}
          </Link>
        )}
      </div>
    </div> */
  );
}

export default function Notification({
  txHash,
  success,
  title,
  message,
}: NotificationProps) {
  const duration = success ? 5000 : 10000;

  toast.custom((t) => (
    <TailwindToast
      t={t}
      success={success}
      duration={duration}
      title={title}
      message={message}
      txHash={txHash}
    />
  ));
}
