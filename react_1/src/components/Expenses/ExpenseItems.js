import './ExpenseItems.css'

import ExpenseItemSCard from './../UI/ExpenseItemSCard'
import ExpenseItem from './ExpenseItem'
import ExpenseItemsFilterYear from './ExpenseItemsFilterYear'



const ExpenseItems = dataProps => {



  const expenseItems = dataProps.expenseItems



  const expenseItemsFilterYearHandler = itemsFilterYearValue => {

    //

  }


  return (

    <div>



       <ExpenseItemSCard className='expense-items'>
			 <ExpenseItemsFilterYear expenseItemsFilterBy='Filter by year' onExpenseItemsFilterYear={ expenseItemsFilterYearHandler } />
			 
        <ExpenseItem expenseItem={ expenseItems[0] } />

        <ExpenseItem expenseItem={ expenseItems[1] } />

        <ExpenseItem expenseItem={ expenseItems[2] } />
      </ExpenseItemSCard>



    </div>

  )



}



export default ExpenseItems
