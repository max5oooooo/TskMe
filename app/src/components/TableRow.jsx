import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask, pauseTask, startTask, } from '../store/slices/taskSlice';

const TableRow = ({ task }) => {
    // Stati per i vari tempi
    const [startTime, setStartTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [overtime, setOvertime] = useState(0);

    // Stati per gestire lo stato dei timer
    const [isRunningStart, setIsRunningStart] = useState(false);
    const [isRunningBreak, setIsRunningBreak] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [startIntervalId, setStartIntervalId] = useState(null);
    const [breakIntervalId, setBreakIntervalId] = useState(null);

    const dispatch = useDispatch();



    // Funzione per convertire l'orario (HH:MM) in secondi
    const timeToSeconds = (time) => {
        const [hours, minutes, seconds = 0] = time.split(':').map(Number);
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
        const predefinedTimeInSeconds = timeToSeconds(task.estimatedTime);
        setOvertime(Math.max((startTime + breakTime) - predefinedTimeInSeconds, 0));

        dispatch(completeTask(task.id));
    };

    // Funzione per riavviare (toggle tra start e stop)
    const toggleStartStop = () => {
        if (isRunningStart) {
            dispatch(pauseTask(task.id));
            stopStartTime();
        } else {
            dispatch(startTask(task.id));
            startStartTime();
        }
    };

    // Funzione per eliminare tutto
    const deleteTaskHandler = () => {
        clearInterval(startIntervalId);
        clearInterval(breakIntervalId);
        setIsRunningStart(false);
        setIsRunningBreak(false);

        // Rimuovi la task dallo store
        dispatch(deleteTask(task.id));
    };

    useEffect(() => {
        return () => {
            if (startIntervalId) clearInterval(startIntervalId);
            if (breakIntervalId) clearInterval(breakIntervalId);
        };
    }, [startIntervalId, breakIntervalId]);

    return (

        <tr className="text-sm text-gray-700  text-center" >
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{task.creationDate}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{task.type}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{secondToTime(startTime)}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{secondToTime(breakTime)}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{task.estimatedTime} </td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{secondToTime(totalTime)}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{overtime >= 0 ? secondToTime(overtime) : 'N/A'}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{task.state}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{task.priority}</td>
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">
                <div className="flex flex-row  justify-self-center gap-3 m-1 ">
                    <button onClick={toggleStartStop} disabled={isCompleted}>
                        {isRunningStart ? (<i className="text-primary fa-solid fa-pause"></i>) : (<i class="text-primary fa-solid fa-play"></i>)}
                    </button>
                    <button onClick={complete} disabled={!isRunningStart && !isRunningBreak}>
                        <i className=" text-primary fa-solid fa-check"></i>
                    </button>
                    <button onClick={deleteTaskHandler}>
                    <i className="text-primary fa-solid fa-trash"></i>
                    </button>
                </div>

            </td>
        </tr>
    )
}
export default TableRow;