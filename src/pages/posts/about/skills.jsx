import { motion } from "framer-motion";

export const Skills = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}

            className="flex gap-x-3 gap-y-5 flex-wrap"
        >

            <table className="table-auto border-separate border-spacing-x-3">
                <caption className="mb-1">Nerd Skills</caption>
                <tbody>
                    <tr>
                        <th className="text-left"> <label for="prog_1" className="relative bottom-[2px]"> HTML/HTML5 </label> </th>
                        <td> <progress id="prog_1" className="progress-style" value="9" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_2" className="relative bottom-[2px]"> CSS </label> </th>
                        <td> <progress id="prog_2" className="progress-style" value="9" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_2" className="relative bottom-[2px]"> SCSS </label> </th>
                        <td> <progress id="prog_2" className="progress-style" value="9" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_2" className="relative bottom-[2px]"> Tailwind CSS </label> </th>
                        <td> <progress id="prog_2" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_3" className="relative bottom-[2px]"> JavaScript/TS </label> </th>
                        <td> <progress id="prog_3" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_3" className="relative bottom-[2px]"> React JS </label> </th>
                        <td> <progress id="prog_3" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="prog_3" className="relative bottom-[2px]"> SQL </label> </th>
                        <td> <progress id="prog_3" className="progress-style" value="3" max="10" /> </td>
                    </tr>
                </tbody>
            </table>

            <table className="table-auto border-separate border-spacing-x-3">
                <caption className="mb-1">UX Skills</caption>
                <tbody>
                    <tr>
                        <th className="text-left"> <label for="ux_1" className="relative bottom-[2px]"> User Research </label> </th>
                        <td> <progress id="ux_1" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_2" className="relative bottom-[2px]"> Usability Testing </label> </th>
                        <td> <progress id="ux_2" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_3" className="relative bottom-[2px]"> User-Centered Designing </label> </th>
                        <td> <progress id="ux_3" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_4" className="relative bottom-[2px]"> Interaction Design </label> </th>
                        <td> <progress id="ux_4" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_5" className="relative bottom-[2px]"> Information Architecture </label> </th>
                        <td> <progress id="ux_5" className="progress-style" value="9" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_6" className="relative bottom-[2px]"> Wireframing </label> </th>
                        <td> <progress id="ux_6" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="ux_7" className="relative bottom-[2px]"> Prototyping </label> </th>
                        <td> <progress id="ux_7" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                </tbody>
            </table>

            <table className="table-auto border-separate border-spacing-x-3">
                <caption className="mb-1">Design Tools</caption>
                <tbody>
                    <tr>
                        <th className="text-left"> <label for="dt_1" className="relative bottom-[2px]"> Photoshop </label> </th>
                        <td> <progress id="dt_1" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_2" className="relative bottom-[2px]"> Illustrator </label> </th>
                        <td> <progress id="dt_2" className="progress-style" value="3" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_3" className="relative bottom-[2px]"> Adobe XD </label> </th>
                        <td> <progress id="dt_3" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_4" className="relative bottom-[2px]"> Axure </label> </th>
                        <td> <progress id="dt_4" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_5" className="relative bottom-[2px]"> Figma </label> </th>
                        <td> <progress id="dt_5" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_6" className="relative bottom-[2px]"> Final Cut Pro </label> </th>
                        <td> <progress id="dt_6" className="progress-style" value="6" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_7" className="relative bottom-[2px]"> Framer </label> </th>
                        <td> <progress id="dt_7" className="progress-style" value="3" max="10" /> </td>
                    </tr>
                </tbody>
            </table>

            <table className="table-auto border-separate border-spacing-x-3">
                <caption className="mb-1">Language</caption>
                <tbody>
                    <tr>
                        <th className="text-left"> <label for="dt_1" className="relative bottom-[2px]"> English </label> </th>
                        <td> <progress id="dt_1" className="progress-style" value="10" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_2" className="relative bottom-[2px]"> German </label> </th>
                        <td> <progress id="dt_2" className="progress-style" value="3" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="dt_3" className="relative bottom-[2px]"> Design </label> </th>
                        <td> <progress id="dt_3" className="progress-style" value="9" max="10" /> </td>
                    </tr>
                </tbody>
            </table>

            <table className="table-auto border-separate border-spacing-x-3">
                <caption className="mb-1">Other Skills</caption>
                <tbody>
                    <tr>
                        <th className="text-left"> <label for="os_1" className="relative bottom-[2px]"> Creativity </label> </th>
                        <td> <progress id="os_1" className="progress-style" value="8" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="os_2" className="relative bottom-[2px]"> MS Office </label> </th>
                        <td> <progress id="os_2" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="os_3" className="relative bottom-[2px]"> Supabase </label> </th>
                        <td> <progress id="os_3" className="progress-style" value="6" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="os_4" className="relative bottom-[2px]"> WordPress </label> </th>
                        <td> <progress id="os_4" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                    <tr>
                        <th className="text-left"> <label for="os_5" className="relative bottom-[2px]"> Git </label> </th>
                        <td> <progress id="os_5" className="progress-style" value="7" max="10" /> </td>
                    </tr>
                </tbody>
            </table>
            
        </motion.div>
    );
}