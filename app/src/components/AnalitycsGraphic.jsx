import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import useDictionary from '../hook/useDictionary';

// Registriamo i componenti necessari di Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const datasets = [
  [12, 19, 3, 5, 2, 3, 15, 19, 3, 5, 25, 3],
  [0, 1, 2, 8, 11, 4, 10, 9, 10, 11, 19, 1],
  [1, 9, 10, 8, 20, 16, 2, 0, 9, 3, 1, 1]
]

const labels = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Sett', 'Ott', 'Nov', 'Dic'];

const AnalitycsGraphic = () => {
  const dictionary = useDictionary();
  const [period, setPeriod] = useState("0-12");
  const [data, setData] = useState({
    labels: labels, // Etichette
    datasets: [
      {
        label: 'TotalTime', // Etichetta del dataset
        data: datasets[0], // Dati da visualizzare
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Colore di riempimento delle barre
        borderColor: 'rgba(75, 192, 192, 1)', // Colore del bordo delle barre
        borderWidth: 1, // Spessore del bordo
      },
      {
        label: 'Overtime', // Etichetta del dataset
        data: datasets[1], // Dati da visualizzare
        backgroundColor: 'rgba(230, 0, 36, 0.2)', // Colore di riempimento delle barre
        borderColor: 'rgba(230, 0, 36, 1)', // Colore del bordo delle barre
        borderWidth: 1, // Spessore del bordo
      },
      {
        label: 'BreakTime', // Etichetta del dataset
        data: datasets[2], // Dati da visualizzare
        backgroundColor: 'rgba(249, 206, 26, 0.2)', // Colore di riempimento delle barre
        borderColor: 'rgba(249, 206, 26, 1)', // Colore del bordo delle barre
        borderWidth: 1, // Spessore del bordo
      },
    ],
  });

  const handlePeriod = (e) => {
    const {value} = e.target;
    setPeriod(value);
  }

  // Configurazione del grafico
  const options = {
    responsive: true, // Rende il grafico reattivo
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Analisi Dati', // Titolo del grafico
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Inizia l'asse Y da 0
      },
    },
  };

  const getArrayRange = (array, start, position) => {
    return [...array].splice(start, position)
  }

  useEffect(() => {
    const [start, position] = period.split("-").map(n => Number(n));
    setData((data) => {
      return {
        ...data,
        labels: getArrayRange(labels, start, position),
        datasets: [
          {
            ...data.datasets[0],
            data: getArrayRange(datasets[0], start, position),
          },
          {
            ...data.datasets[1],
            data: getArrayRange(datasets[1], start, position),
          },
          {
            ...data.datasets[2],
            data: getArrayRange(datasets[2], start, position),
          }
        ]
      }
    })
  }, [period]);

  return (
    <>
    <div>
      <select name="" id="" onChange={handlePeriod} value={period} className='rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer bg-white'>
        <option value="0-12">{dictionary.ANALITYCS.ANNUALY}</option>
        <option value="0-6">{dictionary.ANALITYCS.FIRSTSEMESTER}</option>
        <option value="6-6">{dictionary.ANALITYCS.SECONDSEMESTER}</option>
        <option value="0-3">{dictionary.ANALITYCS.FIRSTQUARTER}</option>
        <option value="3-3">{dictionary.ANALITYCS.SECONDQUARTER}</option>
        <option value="6-3">{dictionary.ANALITYCS.THIRDQUARTER}</option>
        <option value="9-3">{dictionary.ANALITYCS.FOURTHQUARTER}</option>
      </select>
    </div>
    <div className="w-full h-[400px]">
      <Bar data={data} options={options} />
    </div>
    </>
  );
};

export default AnalitycsGraphic;