import { motion } from "framer-motion"; // or "motion/react" depending on your project setup
import { Button } from "./Button";
import { X } from "lucide-react";

export default function Dialog({ widthClass = "w-full" }) {
  return (
    <div className={`relative ${widthClass}`}>
      <motion.div 
      className="flex flex-col gap-4 border p-8 rounded-2xl  bg-white"
      whileHover={{scale: 1.03, y:-4}}
      transition={{
        type:"spring",
        stiffness:400,
        damping:25,
      }}
      >
        <h1 className="text-3xl font-bold">Heading</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="flex gap-4 justify-end">
          <Button label="Learn more" variant="secondary" />
          <Button label="Got it" />
        </div>

        <button className="absolute top-4 right-4 border cursor-pointer rounded-sm">
          <X />
        </button>
      </motion.div>
    </div>
  );
}