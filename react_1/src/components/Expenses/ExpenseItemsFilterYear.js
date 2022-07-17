import './../UI/ExpenseItemsFilter.css'



const ExpenseItemsFilterYear = dataProps => {



  const expenseItemsFilterYearHandler = itemsFilterYearEvent => {

    dataProps.onExpenseItemsFilterYear(itemsFilterYearEvent.target.value)

  }


  return (

    <div className='expense-items-filter'>



      <div className='expense-items-filter__control'>
        <label>{ dataProps.expenseItemsFilterOptions }</label>

       <select value={ dataProps.expenseItemsFilterYearValue } onChange={ expenseItemsFilterYearHandler }>
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
