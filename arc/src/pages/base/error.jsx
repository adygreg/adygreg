import { motion } from "framer-motion";

function Error() {
    return (
        <motion.div className="inner-container home-container flex flex-1 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >

            <p className="relative bottom-8">404 : Page Not Found</p>

        </motion.div>
    )
}

export default Error;
