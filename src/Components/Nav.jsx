import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinksPopup from "./SocialLinksPopup"; // 1. استيراد المكون الجديد

const Nav = () => {
  const navLinks = [
    { path: "", label: "الرئيسيه" },
    { path: "salat", label: "مواقيت الصلاة" },
    { path: "lessons", label: "الدروس" },
    { path: "azkar", label: "الأذكار" },
    { path: "duaa", label: "الدعاء" },
  ];
  // 2. إعادة تسمية الحالة لتكون أوضح وإضافة حالة جديدة للـ popup
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialPopupOpen, setIsSocialPopupOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSocialPopup = () => setIsSocialPopupOpen(!isSocialPopupOpen);

  return (
    <nav
      className="nav h-20 z-50 w-full bg-[var(--primary-color)] border-b-gray-500 backdrop-blur-lg fixed top-0
 flex justify-between items-center p-4"
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex w-4/5 justify-evenly gap-7.5">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={`/${link.path}`}
            className="mx-2 text-[var(--text-color-light)] hover:text-[var(--accent-color)] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {/* 3. تعديل زر "تابعني" لسطح المكتب */}
      <div className="relative hidden md:block">
        <button
          onClick={toggleSocialPopup}
          className="bg-[var(--accent-color)] text-[var(--text-color-dark)] px-4 py-2 rounded-md"
        >
          تابعني
        </button>
        <SocialLinksPopup
          isOpen={isSocialPopupOpen}
          onClose={() => setIsSocialPopupOpen(false)}
          className="absolute top-full left-0 mt-2 w-48"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center w-full justify-between">
        <span className="text-xl text-[var(--text-color-light)] font-bold">
          حسنات
        </span>
        <button
          onClick={toggleMobileMenu}
          className="text-[var(--text-color-light)] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--primary-color)] shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={`/${link.path}`}
                  className="mx-2 text-[var(--text-color-light)] hover:text-[var(--accent-color)] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
              {/* 4. تعديل زر "تابعني" للجوال */}
              <div className="relative w-full">
                <button
                  onClick={toggleSocialPopup}
                  className="bg-[var(--accent-color)] text-[var(--text-color-dark)] px-4 py-2 rounded-md w-full mt-2"
                >
                  تابعني
                </button>
                <SocialLinksPopup
                  isOpen={isSocialPopupOpen}
                  onClose={() => setIsSocialPopupOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
