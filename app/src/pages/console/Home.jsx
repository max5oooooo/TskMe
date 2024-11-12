import ConsoleContentBox from "../../components/shared/ConsoleContentBox"
import useDictionary from "../../hook/useDictionary";
import TaskTable from "../../components/TaskTable";

const HomeConsole = ({ form }) => {
    const dictionary = useDictionary();
    

    return (

        <>
            <div>
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>{dictionary.HOME_CTA_P}</p>
            </div>
            <div>
                <ConsoleContentBox>
                    <TaskTable />
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default HomeConsole