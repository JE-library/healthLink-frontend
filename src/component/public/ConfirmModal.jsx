import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

const ConfirmModal = ({
  isOpen = false,             // ✅ default to false
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
}) => {
  return (
    <Dialog open={!!isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <Dialog.Panel className="relative bg-white rounded-xl p-6 w-full max-w-sm mx-auto shadow-lg z-50">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        <Dialog.Title className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </Dialog.Title>

        <Dialog.Description className="text-sm text-gray-600 mb-6">
          {message}
        </Dialog.Description>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
          >
            {confirmText}
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ConfirmModal;
