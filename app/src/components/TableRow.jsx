import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, pauseTask, startTask } from '../store/slices/taskSlice';

const TableRow = ({task}) => {
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

    useEffect(() => {
        return () => {
            if (startIntervalId) clearInterval(startIntervalId);
            if (breakIntervalId) clearInterval(breakIntervalId);
        };
    }, [startIntervalId, breakIntervalId]);

    return (

        <tr className="text-sm text-gray-700 " >
            <td className="border-2 border-slate-400">{task.creationDate}</td>
            <td className="border-2 border-slate-400">{task.type}</td>
            <td className="border-2 border-slate-400">{secondToTime(startTime)}</td>
            <td className="border-2 border-slate-400">{secondToTime(breakTime)}</td>
            <td className="border-2 border-slate-400">{task.estimatedTime} </td>
            <td className="border-2 border-slate-400">{secondToTime(totalTime)}</td>
            <td className="border-2 border-slate-400">{overtime >= 0 ? secondToTime(overtime) : 'N/A'}</td>
            <td className="border-2 border-slate-400">{task.state}</td>
            <td className="border-2 border-slate-400">{task.priority}</td>
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
    )
}
export default TableRow;