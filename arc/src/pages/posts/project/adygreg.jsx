import { motion } from "framer-motion";

export const AdyGreg = () => {

    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >

            AdyGreg Page

        </motion.p>
    );
}