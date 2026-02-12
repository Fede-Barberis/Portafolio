import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const TypeWriterMotion = ({ text }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: text.length * 0.1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
        });

        return controls.stop;
    }, []);

    return (
        <motion.h1 className="text-4xl sm:text-5xl font-heading font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-blue-600"
            >
                |
            </motion.span>
        </motion.h1>
    );
};

export default TypeWriterMotion;