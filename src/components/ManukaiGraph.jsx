import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ManukaiGraph = () => {
  const data = {
    labels: Array.from({ length: 11 }, (_, i) => i),  
    datasets: [
      {
        label: 'sin(x)',
        data: Array.from({ length: 11 }, (_, i) => Math.sin(i)),
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.3)',
        pointBackgroundColor: 'green',
        pointBorderColor: 'green',
      },
      {
        label: 'cos(x)',
        data: Array.from({ length: 11 }, (_, i) => Math.cos(i)),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: '#c4c8ca' },
        grid: { color: 'gray' },
      },
      y: {
        ticks: { color: '#c4c8ca' },
        grid: { color: 'gray' },
      },
    },
    plugins: {
      legend: {
        labels: { color: '#c4c8ca' },
        display: false,
      },
      chartAreaBackground: {
        color: '#122229',
      },
    },
  };

  const chartAreaBackgroundPlugin = {
    id: 'chartAreaBackground',
    beforeDraw: (chart) => {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.fillStyle = chart.options.plugins.chartAreaBackground.color;
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.width, chartArea.height);
      ctx.restore();
    }
  };

  return (
    <div className='flex flex-col  w-full p-3'>

      <div className='flex items-center mb-1 justify-between'>
        <h1 className='text-[#4ED2EF] text-[14px]'>Number of reports</h1>
        <div className='text-[#4ED2EF] flex gap-1 items-center'>
          <i className="bi bi-exclamation-circle cursor-pointer"></i>
          <i className="bi bi-x-lg cursor-pointer"></i>
        </div>
      </div>

      <div className='w-full p-[5px] text-[#c4c8ca] border-[#07414E] border-[1px]'>
        <div className='flex items-center gap-2 text-[#c4c8ca]'>
          <div className='rotate-[-90deg]'>Y</div> 
          <div className='w-full'>
            <Line data={data} options={options} plugins={[chartAreaBackgroundPlugin]} />
          </div>
        </div>
        <div className='text-center'>X</div>
      </div>
    </div>
  );
};

export default ManukaiGraph;
