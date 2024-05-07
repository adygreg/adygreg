import { motion } from "framer-motion";

export const Education = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            B.Sc. Computer Science - Saarlandes des Universität <small className="opacity-50">[2022-Present]</small>
            <ul className="relative left-3">
                <li> <i class="fa-solid fa-clipboard-check mr-2"></i> Completed Human Computer Interaction Course</li>
                <li> <i class="fa-solid fa-clipboard-list mr-2"></i> Enrolled to Interactive Design Course</li>
            </ul>
        </motion.div>
    );
}