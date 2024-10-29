import React from "react";


function ConsoleModal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button className="flex gap-2 rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer" type="button" onClick={() => setShowModal(true)}>
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative p-4 w-full max-w-2xl max-h-full ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Crea la tua Task
                                    </h3>
                                    <button type="button" className="text-3xl font-semibold bg-transparent rounded-lg text-sm w-3 h-10 ms-auto inline-flex justify-center items-center ml-4"
                                        data-modal-hide="default-modal"
                                        onClick={() => setShowModal(false)}>
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form className="">
                                    <div className="relative z-0 m-4">
                                    <label for="toDo" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">Select a todo:</label>
                                        <select id="toDo" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                            <option value="task">TaskMe</option>
                                            <option value="proj">ProjMe</option>
                                        </select>
                                    </div>
                                    <div className="relative z-0 m-4">
                                        <label for="title" className="block text-sm font-medium text-gray-900 bg-transparent">Title:</label>
                                        <input type="text" id="title" className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    </div>
                                    <div className="relative z-0 m-4">
                                    <label for="message"  className="block text-sm font-medium text-gray-900 bg-transparent">Description:</label>
                                        <textarea id="message" rows="4" className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Write description here"></textarea>
                                    </div>
                                    <div className="relative z-0 m-4">
                                    <label for="priority" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">Select a priority:</label>
                                        <select id="priority" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                                            <option value="low" >Low</option>
                                            <option value="medium" >Medium</option>
                                            <option value="high" >High</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-between">
                                    <div class="relative z-0 m-4">
                                        <label for="time" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a time</label>
                                        <input id="time" type="time" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    </div>
                                    <div className="relative z-0 m-4">
                                        <label for="date" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a date</label>
                                        <input id="date" type="date" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    </div>
                                    </div>
                                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Salva
                                        </button>
                                        <button
                                            className="text-white bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Chiudi
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


export default ConsoleModal