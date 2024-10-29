import { useEffect } from "react";

const Modal = ({ isOpen, onClose = () => { }, children, title }) => {
    const onEscape = (e) => {
        if (e.key === "Escape") onClose();
    }

    useEffect(() => {
        document.addEventListener("keydown", onEscape);

        return () => {
            document.removeEventListener("keydown", onEscape);
        }
    }, []);

    return (
        <>
            <div className={`fixed inset-0 z-50 flex w-screen h-screen justify-center items-center transition-all${isOpen ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                <div onClick={onClose} className={`fixed inset-0 z-40 bg-black bg-opacity-25 flex w-screen h-screen justify-center items-center transition-all${isOpen ? " opacity-100 visible" : " opacity-0 invisible"}`}></div>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none relative z-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    {title}
                                </h3>
                                <button type="button" className="text-3xl font-semibold bg-transparent rounded-lg w-3 h-10 ms-auto inline-flex justify-center items-center ml-4"
                                    data-modal-hide="default-modal"
                                    onClick={onClose}>
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/*body*/}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Modal