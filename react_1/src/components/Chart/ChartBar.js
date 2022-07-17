import './ChartBar.css'



const ChartBar = dataProps => {


  const dataPointValueLimitTop = dataProps.dataPointValueLimitTop
  let dataPointValuePercentTotal = '0%'

  if(dataPointValueLimitTop > 0) {
    dataPointValuePercentTotal = Math.round((dataProps.dataPointValue / dataPointValueLimitTop) * 100) + '%'
  }


  return (

<div className='chart-bar'>
 <div className='chart-bar__inner'>
  <div className='chart-bar__fill' style={ { height: dataPointValuePercentTotal } }></div>
 </div>

 <div className='chart-bar__label'>
  { dataProps.dataPointLabel }
 </div>
</div>

  )



}



export default ChartBar
