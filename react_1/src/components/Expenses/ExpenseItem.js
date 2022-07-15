import './ExpenseItem.css'

import { useState } from 'react'
import ExpenseItemSCard from './../UI/ExpenseItemSCard'
import CustomDate from './../UI/CustomDate'



const ExpenseItem = dataProps => {



  const expenseItem = dataProps.expenseItem

  const [expenseTitle, setExpenseTitle] = useState(expenseItem.expenseTitle)



  const changeTitleClickHandler = () => {

    setExpenseTitle('Updated')

  }


  return (

    <ExpenseItemSCard className='expense-item'>



      <CustomDate date={ expenseItem.expenseDate } />

      <div className='expense-item__description'>
        <h2>{ expenseTitle }</h2>
        
        <div className='expense-item__price'>
          { expenseItem.expenseCurrense + expenseItem.expenseAmount }
        </div>
      </div>

      <button onClick={ changeTitleClickHandler }>
        Change Title
      </button>



    </ExpenseItemSCard>

  )



}



export default ExpenseItem
