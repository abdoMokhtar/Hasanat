import { motion, AnimatePresence } from "framer-motion";

const SocialLinksPopup = ({ isOpen, onClose, className = "" }) => {
  const socialLinks = [
    {
      url: "https://www.facebook.com/abdo.mokhtar.603319",
      label: "فيسبوك",
      icon: "fa-brands fa-facebook text-blue-600",
    },
    {
      url: "https://www.linkedin.com/in/abdomokhtardev/",
      label: "لينكد إن",
      icon: "fa-brands fa-linkedin text-blue-700",
    },
    {
      url: "https://github.com/abdoMokhtar",
      label: "جيت هاب",
      icon: "fa-brands fa-github text-gray-800",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={`bg-[var(--card-background)] rounded-xl shadow-xl p-4 z-50 flex flex-col gap-2  ${className}`}
        >
          <button
            onClick={onClose}
            className="absolute top-2 left-2 text-gray-400 hover:text-gray-600 text-xl"
          >
            &times;
          </button>
          <h3 className="text-center text-lg font-semibold text-[var(--text-color-dark)] mb-2">
            تابعني على
          </h3>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-[var(--text-color-dark)] hover:bg-[var(--hover-bg)] transition-colors duration-200 rounded-md"
            >
              <i className={`${link.icon} text-2xl w-6 text-center`}></i>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinksPopup;
