import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { SearchBar } from ".";

const HamburgerMenu = ({ categories }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="l">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 shadow-4xl right-0 m-10 p-4 bg-transparent backdrop-blur-sm rounded-sm"
          >
            <ul className="grid gap-3">
              {categories.map((category, idx) => {
                const { Icon } = category;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={category.name}
                    className="w-full p-2 rounded-xl bg-gradient-to-tr from-pink-100 via-pink-200 to-pink-300"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}c
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-transparent h-5"
                      }
                      href={`/category/${category.slug}`}
                    >
                      <span className="flex gap-1 text-xl font-normal">{category.name}</span>
                      <Icon className="text-3xl" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;