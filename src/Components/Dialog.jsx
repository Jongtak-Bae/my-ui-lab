import { motion, AnimatePresence } from "motion/react"; // or "motion/react" depending on your project setup
import { Button } from "./Button";
import { X } from "lucide-react";
import { useEffect, useRef} from "react";

const FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Dialog({
  widthClass = "w-full",
  isOpen = false,
  onClose,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  content,
}) {
  const dialogRef = useRef(null);
  // Stores the element that opened the modal (e.g., a transaction row) so focus returns there on close.
  const triggerRef = useRef(null);

  useEffect(() => {
    //1. Setup code(runs on mount and whenever dependencies change)
    if (!isOpen) return;
    triggerRef.current = document.activeElement;

    // Defer initial focus until the next frame so the dialog DOM node and enter transition are mounted.
    const frameId = requestAnimationFrame(() => {
      const focusable = dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusable && focusable.length > 0) {
        focusable[0].focus();
      } else {
        dialogRef.current?.focus();
      }
    });
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.(); //call onClose() only when it exists ?.
      }
      // Trap Tab / Shift+Tab inside the modal so focus never leaks to background rows or controls.
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // Wrap backward from first item to last item.
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        // Wrap forward from last item to first item.
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

    };
    window.addEventListener("keydown", handleKeyDown);
    //Clean up function
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", handleKeyDown);

      // Guard with isConnected so React does not focus a detached element if the trigger unmounted.
      if (
        triggerRef.current &&
        typeof triggerRef.current.focus === "function" &&
        triggerRef.current.isConnected
      ) {
        triggerRef.current.focus();
      }
    } 
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        //Dimmed Backdrop
        <motion.div
          key="dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 ${widthClass}`}

          onClick={onClose}
        >
          <motion.div
          ref={dialogRef}
          tabIndex={-1}
            key="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            onClick={(e) => e.stopPropagation()} //prevents clicks inside the dialog from hitting the outer backdrop's onClick={onClose}
            className="relative flex flex-col gap-4 rounded-2xl border border-border-neutral bg-bg-neutral-secondary p-8"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <h1 className="text-3xl font-bold text-text-primary">{title}</h1>
            {description && <p className="text-text-primary">{description}</p>}
            {content}

            <div className="flex justify-end gap-4">
              <Button
                label={cancelLabel}
                variant="secondary"
                handleClick={onClose}
              />
              <Button label={confirmLabel} handleClick={onConfirm} />
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 cursor-pointer rounded-sm text-text-secondary hover:bg-bg-neutral-primary"
            >
              <X />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
