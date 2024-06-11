import { Link } from "react-router-dom";

import profile_picture from "/src/assets/images/profile.png"

import test_image from "/src/assets/images/test_image.png"
import test_image_2 from "/src/assets/images/test_image_2.png"

import Tab from "../../components/tab";

function Home () {
    return(
        <div className="flex flex-wrap gap-x-4 gap-y-2 w-full h-full">

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

            <Tab link={"/design"} image={test_image} color={"#0E1D0D"} title={"explore new"} extra={"designs"} extra_class={"flex-1"}/>

            <div className="break basis-full"></div>

            <Tab link={"/art"} image={test_image_2} color={"#E9D4D6"} title={"dive into"} extra={"art"} vignette={false} extra_class={"flex-1 h-[252px]"} />


            <Link to="/about" className="decoration-transparent flex h-[252px]">
                <div className="tab__container box-it w-fit overflow-hidden h-full flex justify-center items-center">
                    <div className="p-8 flex flex-col items-end gap-2 ">
                        <quote className="__brief text-base">Art is everywhere, woven into the fabric of existence. <br /> It is unavoidable, and its presence is undeniable.</quote>
                        <p className="">~ AdyGreg</p>
                    </div>
                </div>
            </Link>

        </div>
    );
}

export default Home;