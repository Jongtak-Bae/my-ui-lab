export function Button({ label, variant = "primary", index }) {
  const baseClasses =
    "bg-bg-brand text-text-on-brand border border-border-brand";
  const variantClasses = {
    primary: "bg-bg-brand text-text-on-brand hover:bg-bg-brand-hover  border border-border-brand focus-visible:outline-border-brand ",
    secondary: "text-text-primary hover:bg-bg-neutral-primary border border-border-brand-accent focus-visible:outline-border-brand-accent",
    tertiary: "text-text-brand hover:bg-bg-neutral-primary focus-visible:outline-border-brand-accent",
    danger: "bg-bg-danger text-text-quaternary hover:bg-bg-danger-hover focus-visible:outline-border-brand ",
  };

  return (
    <button
      className={`
        rounded-lg px-4 py-2.5 text-sm font-bold 
       
        transition active:scale-95 focus-visible:outline-2
        focus-visible:outline-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 
        ${variantClasses[variant]}
        `}
      key={label}
      type="button"
    >
      {label}
    </button>
  );
}
