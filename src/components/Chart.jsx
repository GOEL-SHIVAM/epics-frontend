import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

const Chart = () => {
  return (
    <>
        <h1>Chart</h1>
        <div className='bg-slate-500'>Chart 1</div>
            <Bar
                data={{
                    labels: ['A', 'B', 'C'],
                    datasets: [
                        {
                            label: 'Revenue',
                            data: [200, 300, 400],
                        },
                    ],
                }}
            />
        <div className='bg-slate-500'>Chart 2</div>
        <div className='bg-slate-500'>Chart 3</div>
    </>
  )
}

export default Chart