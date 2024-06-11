import { Link } from "react-router-dom"

function Tab (prop) {
    return (
            <Link to={prop.link} target={prop.next_page ? "_blank" : "_self"} style={{'--bg-color': `${prop.color}`, '--image-url': `url(${prop.image})`, '--image-2-url': `url(${prop.image_2 ? prop.image_2 : prop.image})`}} className={`tab__container box-it overflow-hidden relative bg-[image:var(--image-url)] hover:bg-[image:var(--image-2-url)] bg-[color:var(--bg-color)] ` + prop.extra_class}>
                    <h1 className="absolute z-10 text-4xl bottom-2 left-2 text-white"> {prop.title} 
                    
                    { prop.extra && <span className="font-style text-white"> {prop.extra} </span>}
                    
                    </h1>
                    {prop.vignette &&
                        <div className="vignette"></div>
                    }
            </Link>

    );
}

export default Tab;

Tab.defaultProps = {
    vignette: true,
};