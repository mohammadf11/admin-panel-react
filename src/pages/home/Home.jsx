import React from 'react'
import Feature from '../../components/features/Feature'
import Chart from '../../components/chart/Chart'
import {xAxisData} from '../../data'
import './home.css'
import WidgetSM from '../../components/widgetSM/WidgetSM'
import WidgetLG from '../../components/widgetLG/WidgetLG'
function Home() {
  return (
    <div className='home'>
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className='homeWidgets'>
          <WidgetSM/> 
          <WidgetLG/> 
      </div>
    </div>
  )
}

export default Home
