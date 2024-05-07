import { motion } from "framer-motion";

export const Bio = () => {

    const birthDate = new Date('2001-08-30');
    const ageDiffMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            I'm {age} year old Computer Science Student and self-taught UX Designer & Web Developer. <br />
            I love the idea of making technology Easy & Enjoyable for people to use. <br /><br />
            Also I'm a proud creator of music rating platform called <a href="https://eddierating.com/" className="link-style-2" target="_blank">EddieRating</a>, founded on Jan 4th, 2024.
        </motion.p>
    );
}