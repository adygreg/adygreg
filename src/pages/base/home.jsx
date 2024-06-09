import { Link } from "react-router-dom";

import profile_picture from "/src/assets/images/profile.png"
import test_image from "/src/assets/images/test_image.png"

function Home () {
    return(
        <div className="flex flex-wrap gap-4 w-full h-full">

            <Link to="/about" className="decoration-transparent h-fit">
                <div className="tab__container profile__section box-it w-fit overflow-hidden">
                    <img src={profile_picture} alt="" className="w-80 h-80"/>
                    <div className="mt-1 p-3">
                        <h2 className="__name text-2xl leading-5">Adrian Fernandez</h2>
                        <h3 className="__title text-lg">UX Designer | Student</h3>
                        <quote className="__brief text-sm">I'm 22yrs old who does designing for fun :D</quote>
                    </div>
                </div>
            </Link>

            <div style={{'--image-url': `url(${test_image})`}} className={`tab__container feature__section box-it overflow-hidden relative flex-1 bg-[image:var(--image-url)]`}>
                {/* <img src={test_image} alt="" className="h-fit w-full object-fill" /> */}
                <h1 className="absolute z-10 text-4xl bottom-4 left-4 text-white">explore some <span className="font-style text-white">Designs</span></h1>
                <div className="vignette"></div>
            </div>
            

        </div>
    );
}

export default Home;