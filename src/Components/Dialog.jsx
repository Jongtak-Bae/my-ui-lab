import { motion } from "motion/react"; // or "motion/react" depending on your project setup
import { Button } from "./Button";
import { X } from "lucide-react";

export default function Dialog({ widthClass = "w-full" }) {
  return (
    <div className={`relative ${widthClass}`}>
      <motion.div 
      className="flex flex-col gap-4 p-8 rounded-2xl  bg-bg-neutral-secondary"
      whileHover={{scale: 1.03, y:-4}}
      transition={{
        type:"spring",
        stiffness:400,
        damping:25,
      }}
      >
        <h1 className="text-text-primary text-3xl font-bold">Heading</h1>
        <p className="text-text-primary">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="flex gap-4 justify-end">
          <Button label="Learn more" variant="secondary" />
          <Button label="Got it" />
        </div>

        <button className="text-text-secondary absolute top-4 right-4 cursor-pointer rounded-sm hover:bg-bg-neutral-primary">
          <X />
        </button>
      </motion.div>
    </div>
  );
}