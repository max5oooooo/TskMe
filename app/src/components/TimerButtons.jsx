

import React, { useState, useEffect } from 'react';

const TimeButtons = () => {
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
  const[isCompleted, setIsCompleted] = useState(false);
  const [startIntervalId, setStartIntervalId] = useState(null);
  const [breakIntervalId, setBreakIntervalId] = useState(null);




  // Funzione per convertire l'orario (HH:MM) in secondi
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  //Funzione per convertire secondi in (HH:MM)
  const secondToTime =(totalSeconds) =>{
    const hours = Math.floor(totalSeconds  / 3600);
    const minutes=Math.floor((totalSeconds - hours * 3600)  / 60);
    const seconds=(totalSeconds - hours * 3600 - minutes * 60);

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
      <h2>Gestione Timer</h2>
      <div>
        <label htmlFor="predefinedTime">Tempo Predefinito (hh:mm): </label>
        <input
          id="predefinedTime"
          type="time"
          value={predefinedTime}
          onChange={handlePredefinedTimeChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Start Time (s)</th>
            <th>Break Time (s)</th>
            <th>Total Time (s)</th>
            <th>Overtime (s)</th>
            <th>Azione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{secondToTime(startTime)}</td>
            <td>{secondToTime(breakTime)}</td>
            <td>{secondToTime(totalTime)}</td>
            <td>{overtime >= 0 ? secondToTime(overtime): 'N/A'}</td>
            <td>
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