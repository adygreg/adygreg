import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div className="inner-container contact-container flex flex-1 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >

            <form action="" className="flex items-end flex-col gap-1 w-96" autoComplete="off">
                <input required type="text" name="username" id="username" placeholder="Full Name" className="textbox-style w-full"/> 
                <input required type="email" name="email" id="email" placeholder="Email Address" className="textbox-style w-full"/>
                <textarea required name="" id="" rows="3" placeholder="Message" className="textbox-style w-full"/>
                <input type="submit" value="submit" className="button-style w-fit mt-3"/>
            </form>

        </motion.div>
    )
}

export default Contact;