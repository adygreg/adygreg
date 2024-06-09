import { motion } from "framer-motion";

import logo from "/src/assets/eddierating/logo.png";
import devices from "/src/assets/eddierating/devices.png";
import laptop from "/src/assets/eddierating/laptop.png";

import left from "/src/assets/eddierating/heat/left.png";
import middle from "/src/assets/eddierating/heat/middle.png";
import right from "/src/assets/eddierating/heat/right.png";

import mb1 from "/src/assets/eddierating/mobile/mb1.png"
import mb2 from "/src/assets/eddierating/mobile/mb2.png"
import mb3 from "/src/assets/eddierating/mobile/mb3.gif"
import mb4 from "/src/assets/eddierating/mobile/mb4.gif"
import mb5 from "/src/assets/eddierating/mobile/mb5.gif"

import m1 from "/src/assets/eddierating/more/m1.png"
import m2 from "/src/assets/eddierating/more/m2.png"
import m3 from "/src/assets/eddierating/more/m3.png"
import m4 from "/src/assets/eddierating/more/m4.png"
import m5 from "/src/assets/eddierating/more/m5.png"
import m6 from "/src/assets/eddierating/more/m6.png"

import s1 from "/src/assets/eddierating/search/s1.png"
import s2 from "/src/assets/eddierating/search/s2.png"
import s3 from "/src/assets/eddierating/search/s3.png"

import c1 from "/src/assets/eddierating/chart/c1.png"
import c2 from "/src/assets/eddierating/chart/c2.png"

import d1 from "/src/assets/eddierating/design/d1.gif"
import d2 from "/src/assets/eddierating/design/d2.gif"
import d3 from "/src/assets/eddierating/design/d3.png"

import f1 from "/src/assets/eddierating/function/f1.gif"
import f2 from "/src/assets/eddierating/function/f2.gif"
import f3 from "/src/assets/eddierating/function/f3.png"

import resposive from "/src/assets/eddierating/responsive.gif";

import wireframe from "/src/assets/eddierating/wp/wireframe.png";
import prototype from "/src/assets/eddierating/wp/prototype.png";
import final from "/src/assets/eddierating/wp/final.png";

import program from "/src/assets/eddierating/nerd/prog.png";
import style from "/src/assets/eddierating/nerd/style.png";
import data from "/src/assets/eddierating/nerd/data.png";

export const EddieRating = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative flex justify-center rounded-md h-[80vh] box-it overflow-scroll eddiefy-it"
        >
            <div className="flex gap-6 flex-col items-center w-11/12">

                <div className="flex justify-center items-center gap-2 mt-3">
                    <img src={logo} alt="" className="w-2/12" /> <br />
                    <h1><span className="mr-2">X</span> <strong className="text-4xl font-medium">Project Documentation</strong></h1>
                </div>

                <section className="flex flex-col items-center gap-8">

                    <article className="hero">
                        <img src={laptop} alt="" className="w-[45rem]" />
                    </article>

                    <div className="mb-[50vh]"></div>

                    <article className="resposive-design-section flex flex-col items-center gap-2 text-center">
                        <img src={devices} alt="" className="mb-8" />
                        <h1 className="text-4xl">1. Responsive Design</h1>
                        <p className="text-xl w-9/12">The website is designed to be compatible with a diverse range of screen layouts, spanning from ultra-wide displays to the compact screens of devices.</p>
                        <details>
                            <summary className="
                                    border-solid
                                    border-[5px]
                                    border-[#11002F]
                                    mt-2
                                    py-2
                                    px-4
                                    rounded-2xl
                                    cursor-pointer
                                    hover:bg-[#9747FF]
                                    hover:text-[white]">learn more</summary>
                            <ul className="text-left p-6 space-y-8">
                                <li>
                                    <h1 className="text-2xl font-medium">1. Demonstration</h1>
                                    <p className="text-xl">Like I said, the design is responsive & compactible is various screen layout, with creative solutions.</p>
                                    <img src={resposive} alt="" className="rounded-lg mt-2" />
                                    <p>**gif doesn't work for safari for some reason</p>
                                </li>
                                <li>
                                    <h1 className="text-2xl font-medium">2. Wireframe/Prototype</h1>
                                    <p className="text-xl">After considering several possibilities for design, the following was the most original easy, and creative approach for creating a website for its intended purpose.</p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={wireframe} alt="" className="rounded-lg" />
                                        <img src={prototype} alt="" className="rounded-lg" />
                                        <img src={final} alt="" className="rounded-lg" />
                                        <h1>Wireframe*</h1>
                                        <h1>Prototype*</h1>
                                        <h1>Final</h1>
                                    </div>
                                </li>
                                <li>
                                    <h1 className="text-2xl font-medium">3. Programming</h1>
                                    <p className="text-xl">Section where more people are curious about, the website was developed from the ground up utilizing React JS, Tailwind CSS, SCSS, and Supabase Database.
                                        <span after=" Yes, I made the Website :/ But still not a Programmer." className="text-sm hover:after:content-[attr(after)]"> Please keep in mind, I am a Designer, not a Programmer.</span>
                                    </p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={program} alt="" className="rounded-lg" />
                                        <img src={style} alt="" className="rounded-lg" />
                                        <img src={data} alt="" className="rounded-lg" />
                                        <h1>Code</h1>
                                        <h1>Style</h1>
                                        <h1>Database</h1>
                                    </div>
                                </li>
                            </ul>
                        </details>
                    </article>


                    <div className="mb-[25vh]"></div>

                    <article className="heat-section flex flex-row items-center justify-evenly gap-2 text-center">
                        <div className="flex h-full items-start gap-2 w-[70vw]">
                            <img src={left} alt="" className="mb-8 w-[12vw]" />
                            <img src={middle} alt="" className="mb-8 w-[12vw]" />
                            <img src={right} alt="" className="mb-8 w-[12vw]" />
                        </div>
                        <div className="text-center flex flex-col items-center gap-2 w-fit">
                            <h1 className="text-4xl">2. Mobile Layout</h1>
                            <p className="text-xl">Websites are meticulously designed to facilitate one-handed usability, ensuring optimal user experience and accessibility.</p>
                            <details>
                                <summary className="
                                    border-solid
                                    border-[5px]
                                    border-[#11002F]
                                    mt-2
                                    py-2
                                    px-4
                                    rounded-2xl
                                    cursor-pointer
                                    hover:bg-[#9747FF]
                                    hover:text-[white]">learn more</summary>
                                <ul className="text-left p-6 space-y-8">
                                    <li>
                                        <h1 className="text-2xl font-medium">1. Layout</h1>
                                        <p>The interface was diligently built for mobile users, addressing all of the problems people have when using other websites.</p>
                                        <div className="images relative grid grid-cols-2 mt-2 gap-x-2">
                                            <img src={mb1} alt="" className="rounded-lg" />
                                            <img src={mb2} alt="" className="rounded-lg" />
                                            <div className="absolute w-44 -left-[30vw] top-[30vh]">
                                                <img src={mb5} alt="" className="rounded-xl border-solid border-[5px] border-[#EE0000]" />
                                                <h1 after="Company: nah.. it's good, he has 10+yrs experience 🤡 'brother eww'" className="mt-1 leading-5 hover:after:content-[attr(after)]">the best???<br /></h1>
                                            </div>
                                            <h1>Overall Layout</h1>
                                            <h1>Navigation Bar</h1>
                                        </div>
                                        <p className="w-fit mt-2 px-2 rounded-md text-[--background-color] bg-[--text-color]">it’s the navbar which makes eddierating mobile ✨ special ✨</p>
                                    </li>
                                    <li>
                                        <h1 className="text-2xl font-medium">2. Interaction</h1>
                                        <p>This interaction is really simple and accessible with a single hand (both left & right).</p>
                                        <div className="images relative grid grid-cols-3 mt-2 gap-x-2">
                                            <img src={mb3} alt="" className="rounded-lg" />
                                            <img src={mb4} alt="" className="rounded-lg" />
                                            <img src="" alt="" className="rounded-lg" />
                                            <h1>Back Button</h1>
                                            <h1>Menu Bar</h1>
                                            <h1></h1>
                                        </div>    
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </article>


                    <div className="mb-[20vh]"></div>

                    <article className="more-section flex flex-col items-center gap-2 text-center">
                        <div className="grid grid-cols-3 gap-2">
                            <img src={m1} alt="" className="rounded-lg" />
                            <img src={m2} alt="" className="rounded-lg" />
                            <img src={m3} alt="" className="rounded-lg" />
                            <img src={m4} alt="" className="rounded-lg" />
                            <img src={m5} alt="" className="rounded-lg" />
                            <img src={m6} alt="" className="rounded-lg" />
                        </div>
                        <h1 className="text-4xl">& many more</h1>
                        <p className="text-xl w-10/12">Website is expanding as you read, with completely unique concepts & clean/easy to understand design.</p>
                        <details>
                            <summary className="
                                    border-solid
                                    border-[5px]
                                    border-[#11002F]
                                    mt-2
                                    py-2
                                    px-4
                                    rounded-2xl
                                    cursor-pointer
                                    hover:bg-[#9747FF]
                                    hover:text-[white]">learn more</summary>

                            <ul className="text-left p-6 space-y-8">
                                <li>
                                    <h1 className="text-2xl font-medium">1. Search</h1>
                                    <p>The search bar is user-friendly and delivers relevant results. If there's a typo, we'll notify you with an error message and provide a request button to ask for the album you couldn't find. Simply correct search to find what you need, ensuring a positive user experience.</p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={s1} alt="" className="rounded-lg" />
                                        <img src={s2} alt="" className="rounded-lg" />
                                        <img src={s3} alt="" className="rounded-lg" />
                                        <h1>Search by Artist Name</h1>
                                        <h1>Filter by Month</h1>
                                        <h1>Request Page</h1>
                                    </div>
                                </li>
                                <li>
                                    <h1 className="text-2xl font-medium">2. Chart</h1>
                                    <p>This page lets you discover new music and check out the best hip-hop albums. Instead of relying on outside sources like Billboard, here, users rate albums themselves using a simple rating system I designed.</p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={c1} alt="" className="rounded-lg" />
                                        <img src={c2} alt="" className="rounded-lg" />
                                        <img src="" alt="" className="rounded-lg" />
                                        <h1>Chart Page</h1>
                                        <h1>Simple Rating System</h1>
                                        <h1></h1>
                                    </div>
                                </li>
                                <li>
                                    <h1 className="text-2xl font-medium">3. Design</h1>
                                    <p>The website has a design that's easy to understand, original, innovative and looks neat. When you do something on the site, it gives you nice feedback mechanisms to let you know it's working. </p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={d1} alt="" className="rounded-lg" />
                                        <img src={d2} alt="" className="rounded-lg" />
                                        <img src={d3} alt="" className="rounded-lg" />
                                        <h1>Innovative</h1>
                                        <h1>Feedback</h1>
                                        <h1>Creative</h1>
                                    </div>
                                </li>
                                <li>
                                    <h1 className="text-2xl font-medium">4. Functionality</h1>
                                    <p>When it comes to how the website works, I aimed to make it super easy and convenient for people to use.</p>
                                    <div className="images grid grid-cols-3 mt-2 gap-x-2">
                                        <img src={f1} alt="" className="rounded-lg" />
                                        <img src={f2} alt="" className="rounded-lg" />
                                        <img src={f3} alt="" className="rounded-lg" />
                                        <h1>Table Sort</h1>
                                        <h1 after=" (My favourite)" className="hover:after:content-[attr(after)]">Music Link</h1>
                                        <h1>Tooltips</h1>
                                    </div>
                                </li>
                                <p className="w-full text-xl text-center mt-4"> there are more planned coming <span after="(like Vocabs Page** & Login) " className="text-2xl underline hover:after:content-[attr(after)]">in </span>& <span after=" (like Genius/Who-Sample Button)" className="text-2xl underline hover:after:content-[attr(after)]">out</span>.</p>
                            </ul>
                        </details>
                    </article>


                    <div className="mb-[40vh]"></div>

                    <article className="more-section flex flex-col items-center gap-2 text-center">
                        <h1 className="text-4xl">Try it out yourself...</h1>
                        <p className="text-xl">Explore the website and let me know you’re opinion.</p>

                        <a href="https://eddierating.com/" target="_blank" className="
                        border-solid
                        border-[5px]
                        border-[#11002F]
                        mt-2
                        py-2
                        px-4
                        rounded-2xl
                        hover:bg-[#9747FF]
                        hover:text-[white]
                        "> Visit Now</a>
                    </article>


                    <div className="mb-[15vh]"></div>

                </section>
            </div>

        </motion.div>
    );
}