import { motion } from "framer-motion";

export const Social = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <ul className="flex gap-x-4 gap-y-1 flex-wrap">
                <li>
                    <a href="https://x.com/adygregz" target="_blank" className="link-style-2 space-x-1">
                        <i class="fa-brands fa-x-twitter inline"></i>
                        <p className="inline">adygregz</p>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/adygreg" target="_blank" className="link-style-2 space-x-1">
                        <i class="fa-brands fa-instagram inline"></i>
                        <p className="inline relative">adygreg</p>
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com/@adygreg" target="_blank" className="link-style-2 space-x-1">
                        <i class="fa-brands fa-youtube inline"></i>
                        <p className="inline">adygreg</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:adygreg@duck.com" target="_blank" className="link-style-2 space-x-1">
                        <i class="fa-solid fa-envelope"></i>
                        <p className="inline">adygreg@duck.com</p>
                    </a>
                </li>
            </ul>

        </motion.div>
    );
}