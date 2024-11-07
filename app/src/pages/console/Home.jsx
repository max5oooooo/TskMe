import ConsoleContentBox from "../../components/shared/ConsoleContentBox"
import useDictionary from "../../hook/useDictionary";
import { useSelector } from "react-redux";
import TimerButtons from "../../components/TimerButtons";

const HomeConsole = ({ form }) => {
    const dictionary = useDictionary();
    const tasks = useSelector((state) => (state.tasks))

    return (

        <>
            <div>
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <ConsoleContentBox>
                    <div>
                        <div className="flex flex-row items-center gap-5">
                            <div className=" m-1 flex flex-row items-center gap-5 rounded-md border-2 border-primary bg-slate-100" >
                                <h5>DA:</h5>
                                <label htmlFor="start" className="absolute font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
                                <input id="start" name="date" type="date" className="block py-1.5 px-0 w-30 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                            </div>
                            <div className="m-1 flex flex-row items-center gap-5 rounded-md border-2 border-primary bg-slate-100 " >
                                <h5>A:</h5>
                                <label htmlFor="finish" className="absolute font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
                                <input id="finish" name="date" type="date" className="block py-1.5 px-0 w-30 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                            </div>
                        </div>
                    </div>
                        <table className="w-full table-fixed border-collapse border-spacing-1 mt-5">
                            <thead className="" >
                                <tr className="bg-slate-100">
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_DAY}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_START}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_FINISH}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_DEADLINE}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_BREAK}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_TOTAL_TIME}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_COLABORATORS}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_STATUS}</th>
                                    <th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_PRIORITY}</th>
                                    <th class="border-2 border-primary">bottons</th>
                                </tr>
                            </thead>
                            <tbody className=" bg-white ">
                                {tasks.map((task) => (

                                <tr >
                                    <td class="border border-slate-400">{task.date}</td>
                                    <td class=" border border-slate-400">{task.title}</td>
                                    <td class="border border-slate-400 "></td>
                                    <td class=" border border-slate-400 "></td>
                                    <td class=" border border-slate-400">{task.time}</td>
                                    <td class="border border-slate-400"></td>
                                    <td class="border border-slate-400"></td>
                                    <td class="border border-slate-400"></td>
                                    <td class="border border-slate-400"></td>
                                    <td class="border border-slate-400">{task.priority}</td>
                                    <td class="border border-slate-400">
                                        
                                    </td>
                                </tr>
                               
                            ))}
                               
                            </tbody>
                        </table>
                        < TimerButtons />

                    
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default HomeConsole