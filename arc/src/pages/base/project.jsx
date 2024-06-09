import { useState } from "react";
import { motion } from "framer-motion";

import { AdyGreg } from "../posts/project/adygreg";
import { EddieRating } from "../posts/project/eddierating";

function Project() {

    const [activeSection, setActiveSection] = useState("");

    const renderSection = () => {
        switch(activeSection) {
            // case "adygreg":
            //     return <AdyGreg/> ;
            case "eddierating":
                return <EddieRating/>;
            default:
                return null;
        }
    }

    return (
        <motion.div className="inner-container project-container flex flex-col flex-1 justify-start items-start gap-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="cta space-x-2 space-y-1 text-sm">
                {/* <input type="button" value="adygreg" onClick={() => setActiveSection("adygreg")} className="button-style" /> */}
                <input type="button" value="eddierating" onClick={() => setActiveSection("eddierating")} className="button-style" />
            </div>

            <div className="w-full flex-1" id="display-box">
                {renderSection()}
            </div>

        </motion.div>
    )
}

export default Project;
