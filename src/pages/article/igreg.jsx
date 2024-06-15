import hero_1 from "/src/assets/images/igreg/off.png";
import hero_2 from "/src/assets/images/igreg/on.png";

import drawing from "/src/assets/images/igreg/room.jpg";
import model from "/src/assets/images/igreg/igreg.png";
import model_m from "/src/assets/images/igreg/igreg.gif";
import figma from "/src/assets/images/igreg/figma.png";

function igreg() {
    return (
        <article className="article__container flex flex-wrap gap-6 justify-center">
            
            <div className="basis-full">
                <h1>iGreg: The Computer Website</h1>
                <p>The main inspiration</p>
            </div>

            <div className="hero_image space-x-4 [&>div]:inline">
                <div className="relative">
                    <img src={hero_1} alt="" className="rounded-lg h-80"/>
                    <h2 className="absolute bottom-2 left-4 text-white"> Before Interaction </h2>    
                </div>
                <div className="relative">
                    <img src={hero_2} alt="" className="rounded-lg h-80"/>
                    <h2 className="absolute bottom-2 left-4 text-white"> During Interaction </h2>    
                </div>
            </div>

            <section className="space-y-2">
                <div className="">
                    <h3>Modeling: <span className="font-medium">Using Figma</span></h3>
                </div>
                <img src={model} alt="" className="h-80 rounded-lg"/>
            </section>

            <section className="space-y-2">
                <div className="">
                    <h3>Drawing: <span className="font-medium">Using ProCreate</span></h3>
                </div>
                <img src={drawing} alt="" className="h-80 rounded-lg"/>
            </section>

            <section className="space-y-2">
                <div className="">
                    <h3>Prototype: <span className="font-medium">Using Figma</span></h3>
                </div>
                <img src={figma} alt="" className="h-80 rounded-lg"/>
                <img src={model_m} alt="" className="h-80 rounded-lg ml-4"/>
            </section>



        </article>
    );
}

export default igreg;