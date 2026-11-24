import React, { useId, useState } from "react";
import { cn } from "../utils/cn";
import {Eye, EyeOff} from "lucide-react";

export function Input({
  label = "Label",
  type,
  placeholder,
  value,
  helperText,
  error,
  leadingIcon: Icon,
  trailing,
  disabled,
  readOnly,
  ...props
}) {
  const inputId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const isPasswodType = type === "password";

  const inputType = isPasswodType ? (showPassword? "text": "password") : type;

  return (
    <div className="w-full">
      <div
        className={cn(
          "relative flex h-14 w-full cursor-text items-center border rounded-md gap-3 bg-bg-neutral-secondary px-3 transition-colors focus-within:ring-1",
            disabled || readOnly ? "border-border-disabled bg-bg-disabled"
          : error
            ? "border-border-danger focus-within:ring-bg-danger"
            : " border-border-neutral hover:border-border-brand  focus-within:border-border-brand  focus-within:ring-bg-brand-hover",
        )}
      >
        {Icon && <Icon className={cn(
            "w-6 h-6 shrink-0",
            disabled ?
            "text-text-disabled"
            : "text-text-secondary"
            
            )} />}

        <input
          type={inputType}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-help`
                : undefined
          }
          id={inputId}
          className="peer h-full w-full bg-transparent pt-4 text-base leading-none text-text-primary outline-none"
          disabled={disabled || readOnly}
          value={value}
          {...props}
          
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 text-base leading-none transition-all peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:text-xs",
            Icon ? "left-12" : "left-3",
            disabled ? "text-text-disabled" : "text-text-secondary"
          )}
        >
          {label}
        </label>
        {/* 👇 FOCUS-ONLY PLACEHOLDER / HINT TEXT */}
        {placeholder && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute pt-4 text-base text-text-secondary transition-opacity z-0",
              // Hidden by default, ONLY shows when focused AND the input is empty
              "hidden peer-focus:peer-placeholder-shown:block",
              Icon ? "left-11" : "left-3"
            )}
          >
            {placeholder}
          </span>
        )}

        {
          isPasswodType && !disabled && (
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword? "Hide password": "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-text-primary focus:outline-none z-20"
            >
              {
                showPassword? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )
              }
            </button>
          )
        }
      </div>
      {/* Optional Helper Text that conditionaly display helper text or error message */}
      {typeof error === 'string' ? (
        <p className="text-xs text-text-danger pt-2">{error}</p>
      ) : helperText ? (
        <p className={cn(
            "text-xs pt-2",
            disabled? "text-text-disabled" 
            :" text-text-secondary "
      )}>{helperText}</p>
      ) : null}
    </div>
  );
}
