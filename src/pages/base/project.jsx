import eddierating_thumbnail_b from "/src/assets/images/eddierating_b.jpeg"
import eddierating_thumbnail from "/src/assets/images/eddierating.jpeg"

function Project () {
    return(
        <div className="grid grid-cols-2 gap-4 [&>section]:h-[300px] w-full h-full">

            <section style={{'--image-url': `url(${eddierating_thumbnail})`, '--image-before-url': `url(${eddierating_thumbnail_b})`}} className="project__container box-it relative hover:bg-[image:var(--image-url)] bg-[image:var(--image-before-url)] fredoka">
                <h1 className="tab__title text-4xl absolute bottom-2 right-2">eddierating<span className="tab_extra">.com</span></h1>
                <div className="vignette"></div>
            </section>

        </div>
    );
}

export default Project;