import './../UI/ExpenseItemsFilter.css'

import { useState } from 'react'



const ExpenseItemsFilterYear = dataProps => {



  const [expenseItemsFilterYearValue, setExpenseItemsFilterYearValue] = useState('2005')



  const expenseItemsFilterYearHandler = itemsFilterYearEvent => {

    const itemsFilterYearValue = itemsFilterYearEvent.target.value

    setExpenseItemsFilterYearValue(itemsFilterYearValue)

    dataProps.onExpenseItemsFilterYear(itemsFilterYearValue)

  }


  return (

    <div className='expense-items-filter'>



      <div className='expense-items-filter_control'>
        <label>{ dataProps.expenseItemsFilterBy }</label>

        <select value={ expenseItemsFilterYearValue } onChange={ expenseItemsFilterYearHandler }>
          <option value='2005'>2005</option>

          <option value='2004'>2004</option>

          <option value='2003'>2003</option>

          <option value='2002'>2002</option>

          <option value='2001'>2001</option>

          <option value='2000'>2000</option>
        </select>
      </div>



    </div>

  )



}



export default ExpenseItemsFilterYear
