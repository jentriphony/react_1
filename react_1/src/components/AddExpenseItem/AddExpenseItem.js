import './AddExpenseItem.css'

import { useState } from 'react'
import AddExpenseItemForm from './AddExpenseItemForm'



const AddExpenseItem = dataProps => {




	const [addExpenseItemFormToggleVisibilityStatus, setAddExpenseItemFormToggleVisibilityStatus] = useState(false)



	const addExpenseItemFormToggleVisibilityHandler = () => {

    setAddExpenseItemFormToggleVisibilityStatus(!addExpenseItemFormToggleVisibilityStatus)


	}

	const addExpenseItemHandler = expenseItemInputData => {

    const expenseItemInputData_ = {
      expenseId: 'expense_item_',
      expenseDate: expenseItemInputData.expenseDateInputValue,
      expenseTitle: expenseItemInputData.expenseTitleInputValue,
      expenseCurrense: '$',
      expenseAmount: expenseItemInputData.expenseAmountInputValue
    }

    dataProps.onAddExpenseItem(expenseItemInputData_)

  }


  return (

<div className='add-expense-item'>


 { addExpenseItemFormToggleVisibilityStatus &&
 <AddExpenseItemForm onAddExpenseItemCalcel={ addExpenseItemFormToggleVisibilityHandler } onAddExpenseItem={ addExpenseItemHandler } /> }

 { !addExpenseItemFormToggleVisibilityStatus &&
 <div className='add-expense-item__actions'>
  <button
   type='button'
   onClick={ addExpenseItemFormToggleVisibilityHandler }
  >
   Add expense item
  </button>
 </div> }



</div>

  )



}



export default AddExpenseItem
