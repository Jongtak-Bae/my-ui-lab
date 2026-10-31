import {useState} from "react";
import{ cn } from '../utils/cn';
import {motion} from "motion/react"
export function ToggleSwitch({ label, defaultState = false, onChange}) {
    
    const [isOn, setIsOn] = useState(defaultState);

    const handleToggle = () => {
      
        setIsOn(!isOn);
       if (onChange) {
        onChange(isOn);
       } //optional callback to pass data to parant compoennt
    }

    return (
        <div className="flex justify-center">
           

            {/* Switch Track */}
            <button 
                type="button"
                role="checkbox"
                aria-checked={isOn}
                onClick={handleToggle}
                className={cn(
                    "relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent focus-visible:outline-2 focus-visible:outline-offset-2",
                    isOn ? "bg-emerald-600  focus-visible:outline-border-brand" : "bg-bg-neutral-primary focus-visible:outline-border-brand-accent"
                )}
            
            >   
             <span className="sr-only">
                {label}
            </span>
                {/*Switch Thumb*/}
                
                <motion.div
                    className={cn(
                        "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0",
                        isOn ? "translate-x-5" : "translate-x-0"
                     )} 
                     layout
                />
            </button>
        </div>
    );
}