import './ExpenseItem.css'

import ExpenseItemSCard from './../UI/ExpenseItemSCard'
import CustomDate from './../UI/CustomDate'



const ExpenseItem = dataProps => {



  const expenseItem = dataProps.expenseItem


  return (

<li>



 <ExpenseItemSCard className='expense-item'>
  <CustomDate date={ expenseItem.expenseDate } />

  <div className='expense-item__description'>
   <h2>{ expenseItem.expenseTitle }</h2>

   <div className='expense-item__price'>
    { expenseItem.expenseCurrense + expenseItem.expenseAmount }
   </div>
  </div>
 </ExpenseItemSCard>



</li>

  )



}



export default ExpenseItem
