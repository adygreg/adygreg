import { useState } from "react";
import { Bio } from "../posts/about/bio";
import { Education } from "../posts/about/education";
import { Certificate } from "../posts/about/certificate";
import { Skills } from "../posts/about/skills";
import { Social } from "../posts/about/social";

import { motion } from "framer-motion";

function About() {
    const [activeSection, setActiveSection] = useState("bio");
    const [photoVisibility, setPhotoVisibility] = useState(false);

    const [timerId, setTimerId] = useState(null);

    const viewPhoto = () => {
        setPhotoVisibility(!photoVisibility);

        if (timerId) {
            clearTimeout(timerId);
        }

        const newTimerId = setTimeout(() => {
            setPhotoVisibility(false);
        }, 6000);
        setTimerId(newTimerId);

    };

    const renderSection = () => {
        switch(activeSection) {
            case "bio":
                return <Bio />;
            case "education":
                return <Education />;
            case "certificate":
                return <Certificate />;
            case "skills":
                return <Skills />;
            case "social":
                return <Social />;
            default:
                return null;
        }
    }

    return (
        <motion.div className="inner-container about-container flex flex-col flex-1 justify-start items-start gap-1 "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
                
            <header className="hero flex flex-col gap-1">
                <motion.img id="profile_picture" className={`w-[400px] z-[1] rounded-lg ${photoVisibility ? '' : 'hidden'}`} src="" alt=""
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: photoVisibility ? 1 : 0,
                        y: photoVisibility ? 0 : -20
                    }}
                    transition={{ duration: 0.5 }}
                />
                <input type="button" value={photoVisibility ? 'hide photo':'view photo'} onClick={viewPhoto} className="button-style text-sm w-fit"/>
                <p className="leading-6 mt-3">
                    <span className="block text-2xl capitalize"> adrian gregory fernandez</span>
                </p>
            </header>

            <div className="cta space-x-2 space-y-1 text-sm">
                <input type="button" value="bio" onClick={() => setActiveSection("bio")} className="button-style"/>
                <input type="button" value="education" onClick={() => setActiveSection("education")} className="button-style"/>
                <input type="button" value="certificate" onClick={() => setActiveSection("certificate")} className="button-style"/>
                <input type="button" value="skills" onClick={() => setActiveSection("skills")} className="button-style"/>
                <input type="button" value="social" onClick={() => setActiveSection("social")} className="button-style"/>
            </div>

            <div className="flex-1 w-full py-2" id="message-box">
                {renderSection()}
            </div>

        </motion.div>
    )
}

export default About;
