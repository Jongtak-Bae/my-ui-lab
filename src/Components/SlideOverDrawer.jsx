import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./Button";
import { cn } from "../utils/cn";

export function SlideOverDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  //Handle Escape key dismissal and backrgound body scroll locking
  useEffect(()=> {
    const handleKeyDown = (e) => {
        if(e.key === "Escape"){
            setIsOpen(false);
        }
        
    };
    if(isOpen){
        document.body.style.overflow = "hidden";//Lock background scroll
    }else {
        document.body.style.overflow="unset";
    }
    window.addEventListener("keydown", handleKeyDown);
    // The cleanup function: Runs automatically when the component unmounts or isOpen changes
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);



  return (
    <div className="min-h-[400px] bg-amber-200 p-6">
      <Button
        handleClick={() => setIsOpen(true)}
        label="Open Configuration Drawer"
      />
      <AnimatePresence>
        {isOpen && (
         <>
         {/* Background overlay with blur */}
         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:0}}
         transition={{duration:0.2}}
         onClick={()=> setIsOpen(false)}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm z-50"
         />

            {/* Slide-Over Panel */}
            <motion.div
              initial={{ x: "100%" }}//Push the element 100% of its own width
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
              }}
              className={cn(
                "fixed inset-y-0 right-0 w-full bg-amber-100 max-w-md p-6 z-50"
              )}
              role="dialog"
              aria-modal="ture"
              aria-labelledby="drawer-title"
            >
              {/* Header */}
              <div>
                <h2 id="drawer-title" className="text-lg font-semibold">
                  Design Token Inspector
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-gray-700 p-2 rounded-lg bg-amber-700/50 hover:bg-amber-400 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Content Body */}
              <div>
                <p>
                  Inspect active component states and modify layout variables in
                  real-time.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
