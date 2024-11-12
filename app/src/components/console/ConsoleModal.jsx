import { useState } from "react";
import Modal from "../shared/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/taskSlice";
import useDictionary from "../../hook/useDictionary";

const ConsoleModal = ({ isOpen, onCloseModal = () => { }, onSaveModal = () => { } }) => {
    const [form, setForm] = useState({
        type: "task",
        title: "",
        description: "",
        priority: "low",
        estimatedTime: "",
        state: "pending",
        creationDate: "",
    });
    const dictionary = useDictionary();

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
            type: "task",
            title: "",
            description: "",
            priority: "low",
            estimatedTime: "",
            creationDate: "",
        });
    }

    return (
        <>
            <Modal title={dictionary.MODAL.CREATE_NEW} isOpen={isOpen} onClose={onCloseModal}>
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 m-4">
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">Select a todo:</label>
                        <select id="type" onChange={handleInput} value={form.type} name="type" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="task">TaskMe</option>
                            <option value="proj">ProjMe</option>
                        </select>
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-900 bg-transparent">Title:</label>
                        <input type="text" id="title" onInput={handleInput} value={form.title} name="title"  className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required/>
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-900 bg-transparent">Description:</label>
                        <textarea id="description" onInput={handleInput} value={form.description} name="description" rows="4" className="block py-2.5 px-0 w-full text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder="Write description here"></textarea>
                    </div>
                    <div className="relative z-0 m-4">
                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 bg-transparent">{dictionary.MODAL.SELECT_PRIORITY}</label>
                        <select id="priority" onChange={handleInput} value={form.priority} name="priority" className="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm font-medium border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            <option value="low">{dictionary.TABELA_HOME.TASK_PRIORITY_LOW}</option>
                            <option value="medium">{dictionary.TABELA_HOME.TASK_PRIORITY_MED}</option>
                            <option value="high">{dictionary.TABELA_HOME.TASK_PRIORITY_HIGH}</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="relative z-0 m-4">
                            <label htmlFor="estimatedTime" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a time</label>
                            <input id="estimatedTime" onInput={handleInput} value={form.estimatedTime} name="estimatedTime" type="time" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        </div>
                        <div className="relative z-0 m-4">
                            <label htmlFor="creationDate" className="absolute text-sm font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a date</label>
                            <input id="creationDate" onInput={handleInput} value={form.creationDate} name="creationDate" type="date" className="block py-2.5 px-0 w-60 text-sm font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-9 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            {dictionary.MODAL.SAVE}
                        </button>
                        <button
                            className="text-white bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={onCloseModal}
                        >
                            {dictionary.MODAL.CLOSE}
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
}


export default ConsoleModal