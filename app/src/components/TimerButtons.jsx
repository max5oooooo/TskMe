

import React, { useState, useEffect } from 'react';
import useDictionary from '../hook/useDictionary';

const TimeButtons = () => {
  const dictionary = useDictionary();
  // Stati per i vari tempi
  const [startTime, setStartTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [overtime, setOvertime] = useState(0);

  // Stato per il tempo predefinito (impostabile dall'utente)
  const [predefinedTime, setPredefinedTime] = useState('00:00:05'); // Tempo predefinito inizializzato a 1 minuto (01:00)

  // Stati per gestire lo stato dei timer
  const [isRunningStart, setIsRunningStart] = useState(false);
  const [isRunningBreak, setIsRunningBreak] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [startIntervalId, setStartIntervalId] = useState(null);
  const [breakIntervalId, setBreakIntervalId] = useState(null);




  // Funzione per convertire l'orario (HH:MM) in secondi
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  //Funzione per convertire secondi in (HH:MM)
  const secondToTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    const seconds = (totalSeconds - hours * 3600 - minutes * 60);

    const formattedHours = hours.toLocaleString('it-IT', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    const formattedMinutes = minutes.toLocaleString('it-IT', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    const formattedSeconds = seconds.toLocaleString('it-IT', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  // Funzione per avviare il timer di Start Time
  const startStartTime = () => {
    if (!isRunningStart) {
      const id = setInterval(() => {
        setStartTime(prev => prev + 1);
      }, 1000); // Incrementa ogni secondo
      setStartIntervalId(id);
      setIsRunningStart(true);
    }
  };

  // Funzione per fermare il timer di Start Time e avviare il Break Time
  const stopStartTime = () => {
    clearInterval(startIntervalId);
    setIsRunningStart(false);

    // Inizia il Break Time
    const id = setInterval(() => {
      setBreakTime(prev => prev + 1);
    }, 1000);
    setBreakIntervalId(id);
    setIsRunningBreak(true);
  };

  // Funzione per fermare entrambi i timer e calcolare il Total Time
  const complete = () => {
    clearInterval(startIntervalId);
    clearInterval(breakIntervalId);
    setIsRunningStart(false);
    setIsRunningBreak(false);
    setTotalTime(startTime + breakTime);
    setIsCompleted(true);

    // Calcola l'Overtime
    const predefinedTimeInSeconds = timeToSeconds(predefinedTime);
    setOvertime(Math.max((startTime + breakTime) - predefinedTimeInSeconds, 0));
  };

  // Funzione per riavviare (toggle tra start e stop)
  const toggleStartStop = () => {
    if (isRunningStart) {
      stopStartTime();
    } else {
      startStartTime();
    }
  };

  // Funzione per resettare tutto
  const resetTimers = () => {
    clearInterval(startIntervalId);
    clearInterval(breakIntervalId);
    setStartTime(0);
    setBreakTime(0);
    setTotalTime(0);
    setOvertime(0);
    setIsRunningStart(false);
    setIsRunningBreak(false);
  };

  // Funzione per gestire l'input del tempo predefinito
  const handlePredefinedTimeChange = (e) => {
    setPredefinedTime(e.target.value);
  };

  useEffect(() => {
    return () => {
      if (startIntervalId) clearInterval(startIntervalId);
      if (breakIntervalId) clearInterval(breakIntervalId);
    };
  }, [startIntervalId, breakIntervalId]);

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
          <tr className="text-sm text-gray-700 " >
            <td className="border-2 border-slate-400"> </td>
            <td className="border-2 border-slate-400"> </td>
            <td className="border-2 border-slate-400">{secondToTime(startTime)}</td>
            <td className="border-2 border-slate-400">{secondToTime(breakTime)}</td>
            <td className="border-2 border-slate-400"> </td>
            <td className="border-2 border-slate-400">{secondToTime(totalTime)}</td>
            <td className="border-2 border-slate-400">{overtime >= 0 ? secondToTime(overtime) : 'N/A'}</td>
            <td className="border-2 border-slate-400"></td>
            <td className="border-2 border-slate-400"></td>
            <td className="border-2 border-slate-400">
              <button onClick={toggleStartStop} disabled={isCompleted}>
                {isRunningStart ? 'Stop' : 'Start'}
              </button>
              <button onClick={complete} disabled={!isRunningStart && !isRunningBreak}>
                Complete
              </button>
              <button onClick={resetTimers}>
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeButtons;