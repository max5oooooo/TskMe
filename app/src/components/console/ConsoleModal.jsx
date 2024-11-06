import { useState } from "react";
import Modal from "../shared/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/taskSlice";

const ConsoleModal = ({ isOpen, onCloseModal = () => { }, onSaveModal = () => { } }) => {
    const [form, setForm] = useState({
        toDo: "task",
        title: "",
        message: "",
        priority: "low",
        time: "",
        date: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setForm((form) => ({
            ...form,
            [name]: value
        }));
    }
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveModal(form);
        dispatch(addTask(form));
        setForm({
            toDo: "task",
            title: "",
            message: "",
            priority: "low",
            time: "",
            date: "",
        });
    }

    return (
        <>
            <Modal title="Crea nuovo Task" isOpen={isOpen} onClose={onCloseModal}>
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 m-4">
                        <label htmlFor="toDo" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">Select a todo:</label>
                        <select id="toDo" onChange={handleInput} value={form.toDo} name="toDo" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="task">TaskMe</option>
                            <option value="proj">ProjMe</option>
                        </select>
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-900 bg-transparent">Title:</label>
                        <input type="text" id="title" onInput={handleInput} value={form.title} name="title" required className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-900 bg-transparent">Description:</label>
                        <textarea id="message" onInput={handleInput} value={form.message} name="message" rows="4" className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Write description here"></textarea>
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">Select a priority:</label>
                        <select id="priority" onChange={handleInput} value={form.priority} name="priority" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="relative z-0 m-4">
                            <label htmlFor="time" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a time</label>
                            <input id="time" onInput={handleInput} value={form.time} name="time" type="time" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                        </div>
                        <div className="relative z-0 m-4">
                            <label htmlFor="date" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a date</label>
                            <input id="date" onInput={handleInput} value={form.date} name="date" type="date" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Salva
                        </button>
                        <button
                            className="text-white bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onCloseModal}
                        >
                            Chiudi
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}


export default ConsoleModal