import ConsoleContentBox from "../../components/shared/ConsoleContentBox"

const HomeConsole = () => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <ConsoleContentBox>
                    <table></table>
                </ConsoleContentBox>
            </div>
        </>
    )
}

export default HomeConsole