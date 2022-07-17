import Chart from './../Chart/Chart'



const ExpenseItemsChart = dataProps => {



  const chartDataPoints = [

    {
      id: 'chart_data_point_1_Jan',
      value: 0,
      label: 'Jan'
    },
    {
      id: 'chart_data_point_1_Feb',
      value: 0,
      label: 'Feb'
    },
    {
      id: 'chart_data_point_1_Mar',
      value: 0,
      label: 'Mar'
    },
    {
      id: 'chart_data_point_1_Apr',
      value: 0,
      label: 'Apr'
    },
    {
      id: 'chart_data_point_1_May',
      value: 0,
      label: 'May'
    },
    {
      id: 'chart_data_point_1_Jun',
      value: 0,
      label: 'Jun'
    },
    {
      id: 'chart_data_point_1_Jul',
      value: 0,
      label: 'Jul'
    },
    {
      id: 'chart_data_point_1_Aug',
      value: 0,
      label: 'Aug'
    },
    {
      id: 'chart_data_point_1_Sep',
      value: 0,
      label: 'Sep'
    },
    {
      id: 'chart_data_point_1_Oct',
      value: 0,
      label: 'Oct'
    },
    {
      id: 'chart_data_point_1_Nov',
      value: 0,
      label: 'Nov'
    },
    {
      id: 'chart_data_point_1_Dec',
      value: 0,
      label: 'Dec'
    }

  ]

  for(const expenseItem of dataProps.filteredExpenseItems) {
    chartDataPoints[expenseItem.expenseDate.getMonth()].value += expenseItem.expenseAmount
  }


  return (

<Chart dataPoints={ chartDataPoints } />

  )



}



export default ExpenseItemsChart
