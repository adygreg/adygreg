import drawing_1 from "/src/assets/images/drawing/ornaments.jpg"
import drawing_2 from "/src/assets/images/drawing/Landscape.jpg"
import drawing_3 from "/src/assets/images/drawing/Car.jpg"
import drawing_4 from "/src/assets/images/drawing/Space.jpg"
import drawing_5 from "/src/assets/images/drawing/Portrait.jpg"
import drawing_6 from "/src/assets/images/drawing/Miami.jpg"

function Art () {
    return(
        <div className="flex justify-center gap-5 flex-wrap w-full h-full">
            <Tab img={drawing_6} title={"Miami"} date={"14/06/24"} />
            <Tab img={drawing_5} title={"Portrait"} date={"14/06/24"} />
            <Tab img={drawing_4} title={"Space"} date={"13/06/24"} />
            <Tab img={drawing_3} title={"Car"} date={"12/06/24"} />
            <Tab img={drawing_2} title={"Landscape"} date={"11/06/24"} />
            <Tab img={drawing_1} title={"Ornaments"} date={"10/06/24"} />
        </div>
    );
}

export default Art;

function Tab({img, title, date}) {
    return(
        <div className="box-it h-fit overflow-hidden">
                <img src={img} alt={title + " drawing"} className="h-80"/>
                <h2 className="pt-1 pb-2 px-4 flex justify-between items-end">
                    {title}
                    <span className="font-medium text-base opacity-50">{date}</span>
                </h2>
        </div>
    );
}