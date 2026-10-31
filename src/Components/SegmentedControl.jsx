import React, {useState} from 'react';
import { motion } from "framer-motion";
import {cn} from '../utils/cn';

export function SegmentedControl({ options = [], defaultSelected, onChange }){
    // 1. Manage the currently active tab state
  const [selected, setSelected] = useState(defaultSelected || options[0]);
    return (
      <div className="flex bg-slate-100 p-1.5 rounded-2xl relative w-full max-w-md border border-slate-200 shadow-inner">
      {options.map((option) => {
        const isActive = selected === option;

        return (
          <button
            key={option}
            onClick={() => {
              setSelected(option);
              if (onChange) onChange(option);
            }}
            className={cn(
              "relative flex-1 py-2.5 text-sm font-medium rounded-xl transition-colors z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
              isActive ? "text-slate-900 font-semibold" : "text-slate-500 hover:text-slate-800"
            )}
          >
            {option}

            {/* Sliding Background Pill with Spring Physics */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200/80 -z-10"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
    );
}