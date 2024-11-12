import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, deleteTask, pauseTask, startCurrentTask, startTask, updateCurrentTask, } from '../store/slices/taskSlice';

const TableRow = ({ task }) => {
    const currentTasks = useSelector((state) => state.tasks.current);
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

            // Start per il current task su redux
            dispatch(startCurrentTask({
                ...task,
                state: "started",
                startTime,
                breakTime,
                totalTime,
                overtime,
            }));
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

        // Stop per il current task su redux
        dispatch(startCurrentTask({
            ...task,
            state: "paused",
            startTime,
            breakTime,
            totalTime,
            overtime,
        }));
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

        // Copleted per il current task su redux
        dispatch(startCurrentTask({
            ...task,
            state: "completed",
            startTime,
            breakTime,
            totalTime,
            overtime,
        }));
    };

    // Funzione per riavviare (toggle tra start e stop)
    const toggleStartStop = () => {
        if (isRunningStart) {
            dispatch(pauseTask(task.id));
            stopStartTime();

            // Pause per il current task su redux
            dispatch(startCurrentTask({
                ...task,
                state: "paused",
                startTime,
                breakTime,
                totalTime,
                overtime,
            }));
        } else {
            dispatch(startTask(task.id));
            startStartTime();

            // Start per il current task su redux
            dispatch(startCurrentTask({
                ...task,
                state: "started",
                startTime,
                breakTime,
                totalTime,
                overtime,
            }));
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

    useEffect(() => {
        dispatch(updateCurrentTask({
            ...task,
            startTime,
            breakTime,
            totalTime,
            overtime,
        }))
    }, [startTime, breakTime, totalTime, overtime]);

    useEffect(() => {
        const current = currentTasks.find((c) => c.id == task.id)
        if (current) {
            setStartTime(current.startTime);
            setBreakTime(current.breakTime);
            setTotalTime(current.totalTime);
            setOvertime(current.overtime);
            if (task.state === "started") {
                startStartTime();
            } else if(task.state === "paused") {
                stopStartTime();
            } else if (task.state === "completed") {
                dispatch(updateCurrentTask({
                    ...task,
                    status: "completed",
                    startTime,
                    breakTime,
                    totalTime,
                    overtime,
                }))
            }
        }
    }, []);

    return (

        <tr className="text-sm text-gray-700  text-center" >
            <td className="p-1 border-2 border-blue-gray-100 bg-blue-gray-50">{new Date(task.creationDate).toLocaleDateString("it-IT")}</td>
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
                        {isRunningStart ? (<i className="text-primary fa-solid fa-pause"></i>) : (<i className="text-primary fa-solid fa-play"></i>)}
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