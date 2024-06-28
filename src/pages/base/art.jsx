import drawing_1 from "/src/assets/images/drawing/ornaments.jpg"
import drawing_2 from "/src/assets/images/drawing/Landscape.jpg"
import drawing_3 from "/src/assets/images/drawing/Car.jpg"
import drawing_4 from "/src/assets/images/drawing/Space.jpg"
import drawing_5 from "/src/assets/images/drawing/Portrait.jpg"
import drawing_6 from "/src/assets/images/drawing/Miami.jpg"
import drawing_7 from "/src/assets/images/drawing/Lemon.jpg"
import drawing_8 from "/src/assets/images/drawing/Art.jpg"
import drawing_9 from "/src/assets/images/drawing/Baka.jpg"
import drawing_10 from "/src/assets/images/drawing/NYC.jpg"
import drawing_11 from "/src/assets/images/drawing/Red.jpg"
import drawing_12 from "/src/assets/images/drawing/Mountain.jpg"
import drawing_13 from "/src/assets/images/drawing/Fwæh.jpg"
import drawing_14 from "/src/assets/images/drawing/Sunset.jpg"
import drawing_15 from "/src/assets/images/drawing/T_Pain.jpg"

function Art () {
    return(
        <div className="flex justify-center gap-5 flex-wrap w-full h-full">
            <Tab img={drawing_15} title={"T Pain"} date={"26/06/24"} />
            <Tab img={drawing_14} title={"Sunset"} date={"24/06/24"} />
            <Tab img={drawing_13} title={"Geometrics"} date={"24/06/24"} />
            <Tab img={drawing_12} title={"Ranges"} date={"23/06/24"} />
            <Tab img={drawing_11} title={"Red"} date={"20/06/24"} />
            <Tab img={drawing_10} title={"Liberty"} date={"18/06/24"} />
            <Tab img={drawing_9} title={"Baka"} date={"18/06/24"} />
            {/* <Tab img={drawing_8} title={"Art"} date={"18/06/24"} /> */}
            <Tab img={drawing_7} title={"Lemon"} date={"15/06/24"} />
            <Tab img={drawing_6} title={"Miami"} date={"14/06/24"} />
            <Tab img={drawing_5} title={"Portrait"} date={"14/06/24"} />
            {/* <Tab img={drawing_4} title={"Space"} date={"13/06/24"} /> */}
            <Tab img={drawing_3} title={"Car"} date={"12/06/24"} />
            {/* <Tab img={drawing_2} title={"Landscape"} date={"11/06/24"} /> */}
            <Tab img={drawing_1} title={"Ornaments"} date={"10/06/24"} />
        </div>
    );
}

export default Art;

function Tab({img, title, date}) {
    return(
        <div className="boxed__container h-fit overflow-hidden">
                <img src={img} alt={title + " drawing"} className="h-80"/>
                <h2 className="pt-1 pb-2 px-4 flex justify-between items-end">
                    {title}
                    <span className="font-medium text-base opacity-50">{date}</span>
                </h2>
        </div>
    );
}