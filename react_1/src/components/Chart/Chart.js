import './Chart.css'

import ChartBar from './ChartBar'



const Chart = dataProps => {


  let chartDataPointValuesLimitTop = 0
  for(const dataPoint of dataProps.dataPoints) {
    chartDataPointValuesLimitTop += dataPoint.value
  }


  return (

<div className='chart'>



 { dataProps.dataPoints.map(dataPoint => (
 <ChartBar
  key={ dataPoint.id }
  dataPointValue={ dataPoint.value }
  dataPointValueLimitTop={ chartDataPointValuesLimitTop }
  dataPointLabel={ dataPoint.label }
 />
 )) }



</div>

  )



}



export default Chart
