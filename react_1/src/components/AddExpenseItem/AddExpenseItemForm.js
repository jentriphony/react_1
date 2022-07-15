import './AddExpenseItemForm.css'

import { useState } from 'react'



const AddExpenseItemForm = dataProps => {



  const [expenseTitleInputValue, setExpenseTitleInputValue] = useState('')
  const [expenseAmountInputValue, setExpenseAmountInputValue] = useState('')
  const [expenseDateInputValue, setExpenseDateInputValue] = useState('')
  // Multiple data state
  //
  // const [expenseInputValues, setExpenseInputValues] = useState({
  //   expenseTitleInputValue: '',
  //   expenseAmountInputValue: '',
  //   expenseDateInputValue: ''
  // })



  const expenseTitleInputHandler = titleInputEvent => {

    setExpenseTitleInputValue(titleInputEvent.target.value)
    // Multiple data state
    //
    //
    //
    // alternative approach
    //
    // setExpenseInputValues({
    //   ...expenseInputValues,
    //   expenseTitleInputValue: titleInputEvent.target.value
    // })
    //
    // recommended approach
    //
    // setExpenseInputValues(previousExpenseInputValues => {
    //   return {
    //     ...previousExpenseInputValues,
    //     expenseTitleInputValue: titleInputEvent.target.value
    //   }
    // })

  }
  const expenseAmountInputHandler = amountInputEvent => {

    setExpenseAmountInputValue(amountInputEvent.target.value)
    // Multiple data state
    //
    //
    //
    // alternative approach
    //
    // setExpenseInputValues({
    //   ...expenseInputValues,
    //   expenseAmountInputValue: amountInputEvent.target.value
    // })
    //
    // recommended approach
    //
    // setExpenseInputValues(previousExpenseInputValues => {
    //   return {
    //     ...previousExpenseInputValues,
    //     expenseAmountInputValue: amountInputEvent.target.value
    //   }
    // })

  }
  const expenseDateInputHandler = dateInputEvent => {

    setExpenseDateInputValue(dateInputEvent.target.value)
    // Multiple data state
    //
    //
    //
    // alternative approach
    //
    // setExpenseInputValues({
    //   ...expenseInputValues,
    //   expenseDateInputValue: dateInputEvent.target.value
    // })
    //
    // recommended approach
    //
    // setExpenseInputValues(previousExpenseInputValues => {
    //   return {
    //     ...previousExpenseInputValues,
    //     expenseDateInputValue: dateInputEvent.target.value
    //   }
    // })

  }

  const ExpenseItemFormSubmitHandler = ItemFormSubmitEvent => {

    ItemFormSubmitEvent.preventDefault();

    const expenseInputValues = {
      expenseTitleInputValue: expenseTitleInputValue,
      expenseAmountInputValue: expenseAmountInputValue,
      expenseDateInputValue: new Date(expenseDateInputValue)
    }

    setExpenseTitleInputValue('')
    setExpenseAmountInputValue('')
    setExpenseDateInputValue('')

    dataProps.onAddExpenseItem(expenseInputValues)

  }


  return (

    <form onSubmit={ ExpenseItemFormSubmitHandler }>



      <div className='add-expense-item__controls'>
        <div className='add-expense-item__control'>
          <label>Title</label>
          <input type='text' value={ expenseTitleInputValue } onInput={ expenseTitleInputHandler } />
        </div>

        <div className='add-expense-item__control'>
          <label>Amount</label>
          <input type='number' value={ expenseAmountInputValue } min='0.01' step='0.01' onInput={ expenseAmountInputHandler } />
        </div>

        <div className='add-expense-item__control'>
          <label>Date</label>
          <input type='date' value={ expenseDateInputValue } min='2000-08-01' max='2005-08-01' onInput={ expenseDateInputHandler } />
        </div>
      </div>

      <div className='add-expense-item__actions'>
        <button type='submit'>
          Add Expense Item
        </button>
      </div>



    </form>

  )



}



export default AddExpenseItemForm
