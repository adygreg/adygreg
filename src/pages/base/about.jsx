import cv from "/src/assets/documents/cv.pdf";

function About() {

    let date = new Date();
    function getMyAge(bod) {
        let birthDate = new Date(bod);
        let age = date.getFullYear() - birthDate.getFullYear();
        let monthDiff = date.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && date.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div className="w-full h-full grid grid-cols-3 gap-2">

            <article className="article__section overflow-hidden col-span-3 flex flex-col justify-end rounded-xl box-it p-4 h-[300px] gap-1 [&>*]:w-fit">
                <h1>Adrian Gregory Fernandez</h1>
                <h3>Designer / Frontend Developer / Music Critic</h3>
                <p className="mt-2 opacity-80">
                    I'm {getMyAge("2001-08-30")} year old Computer Science Student and self-taught UX Designer & Web Developer.
                    I love the idea of making technology Easy & Enjoyable for people to use.
                    Also I'm a proud creator of music rating platform called EddieRating, founded on Jan 4th, 2024.
                </p>
            </article>

            <div className="options__section">
                <div className="box-it relative px-3 py-2 h-full" >
                    <h2 className="text-3xl absolute right-4 bottom-2">Social</h2>
                    <div className="[&>a]:text-4xl [&>a]:cursor-pointer space-x-2">
                        <a href="https://github.com/adygreg" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="https://x.com/adygregz" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://linkedin.com/in/adygreg" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="options__section">
                <div className="box-it relative px-3 py-4 h-full" >
                    <h2 className="text-3xl absolute right-4 bottom-2">Resume</h2>
                    <a href={cv} download="Resume" className="button-style-2 decoration-transparent text-base px-3">Download</a>
                </div>
            </div>

        </div>
    );
}

export default About;