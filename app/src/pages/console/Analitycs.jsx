import AnalitycsGraphic from "../../components/AnalitycsGraphic";
import ConsoleContentBox from "../../components/shared/ConsoleContentBox";
import useDictionary from "../../hook/useDictionary";

const AnalitycsConsole = () => {
    const dictionary = useDictionary();

    return (
        <>
        <div>
            <h2 className="text-3xl font-bold">{dictionary.ANALITYCS.ANALITYCS}</h2>
            <p>{dictionary.ANALITYCS.SUBTITLE}</p>
        </div>
        <div>
            <ConsoleContentBox>
                <AnalitycsGraphic/>
            </ConsoleContentBox>
        </div>
        </>
    )
}

export default AnalitycsConsole