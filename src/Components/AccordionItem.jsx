import { useState } from "react";
import { cn } from "../utils/cn";
import { ChevronDown } from "lucide-react";

export function AccordionItem({ title, content }) {
  const [isOpen, setOpen] = useState(false);
  
  // 1. Generate a unique ID for accessibility linking
  const contentId = `accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="p-4 border-b border-slate-200 dark:border-slate-700">
      {/* Accordion Trigger Button */}
      <button 
        className="flex items-center justify-between w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
        onClick={() => setOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId} // 👈 Crucial: Links the button to the content region
      >
        {/* Changed <h1> to <span> because headings cannot be nested inside buttons */}
        <span className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </span>
        
        {/* Animated Chevron Icon */}
        <div className={cn("flex w-8 h-8 rounded-lg justify-center items-center", isOpen? "bg-bg-brand": "bg-bg-neutral-secondary")}>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-text-quaternary transition-transform duration-200 ease-in-out",
              isOpen && "rotate-180 text-text-primary" // Rotates smoothly when open
            )} 
          />
        </div>
      </button>

      {/* Content Panel */}
      <div 
        id={contentId}
        role="region"
        className={cn(
            "grid transition-all duration-200 ease-in-out text-slate-600 dark:text-slate-300",
             isOpen 
             ? "grid-rows-[1fr] p-4"
             : "grid-rows-[0fr] p-0 px-4"
        
        )}
      >
       <div className="overflow-hidden"> {/*Text needs to be nested inside an inner wrapper */}
            <p>{content}</p>
        </div>
      </div>
    </div>
  );
}