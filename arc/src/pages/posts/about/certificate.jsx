import { motion } from "framer-motion";

export const Certificate = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <ol className="list-decimal relative left-6">
                <li><a href="https://www.coursera.org/account/accomplishments/records/TX8FU5WN74ED" target="_blank" className="link-style-2">Foundations of User Experience (UX) Design</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/records/E3C9WWVWU9BA" target="_blank" className="link-style-2">Start the UX Design Process: Empathize, Define, and Ideate</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/records/RQCRKL2L96S8" target="_blank" className="link-style-2">Build Wireframes and Low-Fidelity Prototypes</a></li>
                <li><a href="https://www.coursera.org/account/accomplishments/records/FA8YNJ2LCAJL" target="_blank" className="link-style-2">Conduct UX Research and Test Early Concepts</a></li>
            </ol>
        </motion.div>
    );
}