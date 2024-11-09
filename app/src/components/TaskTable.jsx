import React, { useState, useEffect } from 'react';
import useDictionary from '../hook/useDictionary';
import { useSelector } from 'react-redux';
import TableRow from './TableRow';

const TaskTable = () => {
  const dictionary = useDictionary();
  const tasks = useSelector((state) => (state.tasks))


  return (
    <div>
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