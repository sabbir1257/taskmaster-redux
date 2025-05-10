import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  const close = () => setIsOpen(false);

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
          <div className="flex items-center justify-center min-h-full p-4">
            <Dialog.Panel className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
              <Dialog.Title className="text-lg font-medium text-gray-900">
              {title}
              </Dialog.Title>
              <p className="mt-2 text-sm text-gray-600">
               {children}
              </p>
              <div className="mt-4">
                <button
                  onClick={close}
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-600"
                >
                  Got it, thanks!
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
