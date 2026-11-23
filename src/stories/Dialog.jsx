import { motion } from "motion/react"; // or "motion/react" depending on your project setup
import { Button } from "../Components/Button";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Dialog({
   widthClass = "w-full",
  isOpen,
  onClose,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
 content
  }) {

    useEffect(()=>{
      //1. Setup code(runs on mount and whenever dependencies change)
      if (!isOpen) return;
      const handleKeyDown = (event) => {
        if(event.key === "Escape") {
          onClose?.() //call onClose() only when it exists ?.
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return()=>{
        window.removeEventListener("keydown", handleKeyDown);
      };

      }, [isOpen, onClose]
    );

    if(!isOpen) return null;
  return (
    <div 
    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 ${widthClass}`}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    onClick={onClose}
    >
      <motion.div 
      className="flex flex-col gap-4 p-8 rounded-2xl  bg-bg-neutral-secondary border border-border-neutral"
      whileHover={{scale: 1.03, y:-4}}
      transition={{
        type:"spring",
        stiffness:400,
        damping:25,
      }}
      >
        <h1 className="text-text-primary text-3xl font-bold">{title}</h1>
        {description &&(
          <p className="text-text-primary">
          {description}
        </p>
        )
        

        }
{content}
        
        <div className="flex gap-4 justify-end">
          <Button label={cancelLabel} variant="secondary" onClick={onClose} />
          <Button label={confirmLabel} onClick={onConfirm}/>
        </div>

        <button className="text-text-secondary absolute top-4 right-4 cursor-pointer rounded-sm hover:bg-bg-neutral-primary">
          <X />
        </button>
      </motion.div>
    </div>
  );
}