import tbnail from "/src/assets/images/tbnail.jpg";

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
        <div className="w-full h-full flex flex-col gap-2">

            <article style={{ backgroundImage: `url(${tbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="article__section overflow-hidden flex flex-col justify-end rounded-xl box-it p-4 h-[300px] gap-1 [&>*]:w-fit">
                <h1>Adrian Gregory Fernandez</h1>
                <h3>UX Designer / Frontend Developer / Music Critic</h3>
                <p className="mt-2 opacity-80">
                    I'm {getMyAge("2001-08-30")} year old Computer Science Student and self-taught UX Designer & Web Developer.
                    I love the idea of making technology Easy & Enjoyable for people to use.
                    Also I'm a proud creator of music rating platform called EddieRating, founded on Jan 4th, 2024.
                </p>
            </article>

            <div className="options__section grid grid-cols-3 gap-2 [&>div]:h-[200px]">
                
                <div className="box-it relative px-3 py-2">
                    <h2 className="text-3xl absolute right-4 bottom-2">Social</h2>
                    <div className="[&>i]:text-4xl [&>i]:cursor-pointer space-x-2">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;