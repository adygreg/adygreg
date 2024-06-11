import eddierating from "/src/assets/images/eddierating.png"

import Tab from "../../components/tab";

function Project () {
    return(
        <div className="grid grid-cols-2 gap-4 [&>section]:h-[300px] w-full h-full">

        <Tab link={"https://eddierating.com/#/"} next_page={true} image={eddierating} color={"#FFD600"} title={"eddierating"} extra={""} extra_class={"fredoka"}/>

        </div>
    );
}

export default Project;