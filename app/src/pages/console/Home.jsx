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
                        < TimerButtons />
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default HomeConsole