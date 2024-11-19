import React, { useState, useEffect } from 'react';
import useDictionary from '../hook/useDictionary';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const TaskTable = () => {
    const dictionary = useDictionary();
    const tasks = useSelector((state) => (state.tasks.all))

    // Stato per la pagina corrente e numero di task per pagina
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([1]); // Numero di task per pagina (puoi modificarlo)
    const [tasksPerPage] = useState(5); // Numero di task per pagina (puoi modificarlo)
    const [currentTasks, setCurrentTasks] = useState([]);

    // Funzione per cambiare pagina
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const startIndex = tasksPerPage * (currentPage - 1);
        setCurrentTasks(() => [...tasks].splice(startIndex, tasksPerPage));
        setPageNumbers((p) => {
            const totalPages = Math.ceil(tasks.length / tasksPerPage);
            return totalPages == 0 ? [1] : Array.from(new Array(totalPages)).map((_, i) => i+=1);
        })
    }, [tasks, currentPage, tasksPerPage])

    return (
        <div>
            <table className="w-full table-auto  border-collapse border-spacing-1 mt-5 text-sm ">
                <thead className="text-xs text-gray-700 uppercase" >
                    <tr className="bg-slate-100">
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_DAY}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_START}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_BREAK}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_ESTIMATED}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_TOTAL_TIME}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_OVERTIME}</th>
                        {/*<th className="border-2 border-primary">{dictionary.TABELA_HOME.TASK_COLABORATORS}</th>*/}
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_STATUS}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{dictionary.TABELA_HOME.TASK_PRIORITY}</th>
                        <th className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">bottons</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTasks && currentTasks.map((task, i) => (
                        <TableRow task={task} key={`task-${i}-${task.id}`}></TableRow>
                    ))}
                </tbody>
            </table>
            {/* Paginazione */}
            <div className="flex justify-center mt-4">
                {/* Pulsante Pagina Precedente */}
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-md border border-blue-gray-100 px-1 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-primary  focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-primary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                >
                    Prev
                </button>

                {/* Numeri delle pagine */}
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`min-w-9 rounded-md  border border-transparent text-center transition-all shadow-md hover:shadow-lg hover:bg-primary hover:text-white focus:bg-primary focus:shadow-none ml-1 ${currentPage === number
                            ? 'bg-primary text-white'
                            : 'bg-slate-100 text-gray-700'
                            }`}
                    >
                        {number}
                    </button>
                ))}

                {/* Pulsante Pagina Successiva */}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={Math.ceil(tasks.length / tasksPerPage) == 0 || currentPage === Math.ceil(tasks.length / tasksPerPage)}
                    className="rounded-md border border-blue-gray-100 px-1 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-primary  focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-primary disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-1"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TaskTable;