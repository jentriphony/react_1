import './ExpenseItems.css'

import { useState } from 'react'
import ExpenseItemSCard from './../UI/ExpenseItemSCard'
import ExpenseItemsFilterYear from './ExpenseItemsFilterYear'
import ExpenseItemsFiltered from './ExpenseItemsFiltered'
import ExpenseItemsChart from './ExpenseItemsChart'



const ExpenseItems = dataProps => {


  const expenseItems = dataProps.expenseItems

  const [expenseItemsFilterYearValue, setExpenseItemsFilterYearValue] = useState('2005')
//	const [filteredExpenseItems, setFilteredExpenseItems] = useState( expenseItems.filter(expenseItem => {
//		return expenseItem.expenseDate.getFullYear() === Number(expenseItemsFilterYearValue)
  //	}))
  const filteredExpenseItems = expenseItems.filter(expenseItem => {
		return expenseItem.expenseDate.getFullYear() === Number(expenseItemsFilterYearValue)
	})



  const expenseItemsFilterYearHandler = itemsFilterYearValue => {

    setExpenseItemsFilterYearValue(itemsFilterYearValue)
//    setFilteredExpenseItems(expenseItems.filter(expenseItem => {
//		  return expenseItem.expenseDate.getFullYear() === Number(itemsFilterYearValue)
//	  }))

  }


  return (

<div>



 <ExpenseItemSCard className='expense-items'>
  <ExpenseItemsFilterYear
   expenseItemsFilterOptions='Filter by year'
   expenseItemsFilterYearValue={ expenseItemsFilterYearValue }
   onExpenseItemsFilterYear={ expenseItemsFilterYearHandler }
  />

  <ExpenseItemsChart filteredExpenseItems={ filteredExpenseItems } />

  <ExpenseItemsFiltered filteredExpenseItems={ filteredExpenseItems } />
 </ExpenseItemSCard>



</div>

  )



}



export default ExpenseItems
