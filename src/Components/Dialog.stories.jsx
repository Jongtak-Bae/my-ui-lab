import { useState } from "react";
import Dialog from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    confirmLabel: { control: "text" },
    cancelLabel: { control: "text" },
    widthClass: { control: "text" },
    isOpen: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    title: "Confirm Action",
    description: "Are you sure you want to proceed with this change?",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    widthClass: "max-w-md",
  },
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <div className="p-6 min-h-[280px] flex flex-col items-start gap-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded-lg bg-bg-neutral-secondary text-text-primary text-sm font-medium cursor-pointer"
        >
          Reopen Dialog
        </button>

        <Dialog
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          onConfirm={() => {
            args.onConfirm?.();
            setOpen(false);
          }}
        />
      </div>
    );
  },
};

export const WithoutDescription = {
  args: {
    title: "Discard Unsaved Changes?",
    confirmLabel: "Discard",
    cancelLabel: "Keep Editing",
    widthClass: "max-w-sm",
  },
  render: Default.render,
};