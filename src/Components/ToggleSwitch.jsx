import { useState } from "react";
import { cn } from "../utils/cn";
import { color, motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
export function ToggleSwitch({ label, defaultState = false, onChange }) {
  const [isOn, setIsOn] = useState(defaultState);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(isOn);
    } //optional callback to pass data to parant compoennt
  };

  return (
    <div>
      {/* Switch Track */}
      <button
        type="button"
        role="checkbox"
        aria-checked={isOn}
        onClick={handleToggle}
        className={cn(
          "relative bg-toggle-base-bg items-center inline-flex h-8 w-14 cursor-pointer rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2",
        //   isOn
        //     ? "bg-bg-success  focus-visible:outline-border-brand"
        //     : "bg-toggle-base-bg focus-visible:outline-border-brand-accent",
        )}
      >
        <span className="sr-only">{label}</span>
        {/*Switch Thumb*/}

        <motion.div
          className={cn(
            "grid place-items-center pointer-events-none h-6 w-6 rounded-full bg-bg-neutral-secondary shadow-lg ring-0",
            isOn ? "translate-x-6" : "translate-x-1",
          )}
          layout
        >
            {isOn? <Moon size={"20px"} color= 'var(--color-text-secondary)'/> : <Sun size={"20px"} color= 'var(--color-text-secondary)'/>
             }
          
        </motion.div>
      </button>
    </div>  
  );
}
