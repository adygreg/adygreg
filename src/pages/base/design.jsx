import Tab from "../../components/tab";

import igreg_off from "/src/assets/images/igreg/off.png"
import igreg_on from "/src/assets/images/igreg/on.png"

import collet from "/src/assets/images/collet/tbnail.png"

function Design () {
    return(
        <div className="grid grid-cols-2 gap-4 [&>section]:h-[300px] w-full h-full">
            {/* <Tab link={"/collet"} next_page={false} image={collet} image_2={collet} color={"#ffffff"} title={"Collet"} extra={""} extra_class={""}/> */}
            <Tab link={"/igreg"} next_page={false} image={igreg_off} image_2={igreg_on} color={"#bea383"} title={"iGreg"} extra={""} extra_class={""}/>
        </div>
    );
}

export default Design;