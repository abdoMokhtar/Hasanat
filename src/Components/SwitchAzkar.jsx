/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const SwitchAzkar = ({ setChoice }) => {
  const ButtonInfo = [
    { label: "أذكار الصباح", Action: () => setChoice("sabah") },
    { label: "أذكار المساء", Action: () => setChoice("masaa") },
  ];
  const boxVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "var(--card-background)",
      color: "var(--primary-color)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    click: { scale: 0.95, transition: { duration: 0.2 } },
  };
  return (
    <ul className="w-full flex items-center justify-center gap-2.5 cursor-pointer py-1 text-sm text-[var(--text-color-medium)]">
      {ButtonInfo.map((button, index) => (
        <motion.li
          key={index}
          className="flex items-center px-4 py-3 rounded-md bg-[var(--card-background)] shadow-[var(--shadow)] border-2 border-[var(--accent-color)]"
          onClick={button.Action}
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
        >
          {button.label}
        </motion.li>
      ))}
    </ul>
  );
};

export default SwitchAzkar;
