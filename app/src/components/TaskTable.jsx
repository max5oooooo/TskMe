import React, { useState, useEffect } from 'react';
import useDictionary from '../hook/useDictionary';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const TaskTable = () => {
  const dictionary = useDictionary();
  const tasks = useSelector((state) => (state.tasks))


  return (
    <div>
      <div className="flex flex-row items-center gap-5">
        <div className=" m-1 flex flex-row items-center gap-5 rounded-md border-2  bg-slate-100" >
          <h5>DA:</h5>
          <label htmlFor="start" className="absolute font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
          <input id="start" name="date" type="date" className="block py-1.5 px-0 w-30 text-sm font-medium text-gray-900 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 " placeholder=" " />
        </div>
        <div className="m-1 flex flex-row items-center gap-5 rounded-md border-2 bg-slate-100 " >
          <h5>A:</h5>
          <label htmlFor="finish" className="absolute font-medium text-dark-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-600 peer-focus:dark:text-dark-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"></label>
          <input id="finish" name="date" type="date" className="block py-1.5 px-0 w-30 text-sm font-medium text-gray-900 bg-transparent border-0  appearance-none focus:outline-none focus:ring-0 " placeholder=" " />
        </div>
      </div>
      <table className="w-full table-fixed border-collapse border-spacing-1 mt-5 text-sm ">
        <thead className="text-xs text-gray-700 uppercase" >
          <tr className="bg-slate-100">
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_DAY}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_START}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_BREAK}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_DEADLINE}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_TOTAL_TIME}</th>
            <th className="border-2 bg-slate-100">Overtime</th>
            {/*<th class="border-2 border-primary">{dictionary.TABELA_HOME.TASK_COLABORATORS}</th>*/}
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_STATUS}</th>
            <th className="border-2 bg-slate-100">{dictionary.TABELA_HOME.TASK_PRIORITY}</th>
            <th className="border-2 bg-slate-100">bottons</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
          <TableRow task = {task} ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;