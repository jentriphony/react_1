import './ExpenseItems.css'

import ExpenseItemSCard from './../UI/ExpenseItemSCard'
import ExpenseItem from './ExpenseItem'



const ExpenseItems = dataProps => {



  const expenseItems = dataProps.expenseItems


  return (

    <ExpenseItemSCard className='expense-items'>



      <ExpenseItem expenseItem={ expenseItems[0] } />
      <ExpenseItem expenseItem={ expenseItems[1] } />
      <ExpenseItem expenseItem={ expenseItems[2] } />



    </ExpenseItemSCard>

  )



}



export default ExpenseItems
