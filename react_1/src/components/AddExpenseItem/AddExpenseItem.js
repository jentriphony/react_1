import './AddExpenseItem.css'

import AddExpenseItemForm from './AddExpenseItemForm'



const AddExpenseItem = dataProps => {



  const addExpenseItemHandler = expenseItemInputData => {

    const expenseItemInputData_ = {
      expenseId: 'expense_',
      expenseDate: expenseItemInputData.expenseDateInputValue,
      expenseTitle: expenseItemInputData.expenseTitleInputValue,
      expenseCurrense: '$',
      expenseAmount: expenseItemInputData.expenseAmountInputValue
    }

    dataProps.onAddExpenseItem(expenseItemInputData_)

  }


  return (

    <div className='add-expense-item'>



      <AddExpenseItemForm onAddExpenseItem={ addExpenseItemHandler } />



    </div>

  )
  //



}



export default AddExpenseItem
