import './ExpenseItemsFiltered.css'

import ExpenseItem from './ExpenseItem'



const ExpenseItemsFiltered = dataProps => {



	const filteredExpenseItems = dataProps.filteredExpenseItems

	if(filteredExpenseItems.length === 0) {
		return (
<h2 className='expense-items-filtered__fallback'>
 No expenses found
</h2>
		)
	}


	return (

<ul className='expense-items-filtered'>



 {filteredExpenseItems.map(expenseItem => (
  <ExpenseItem key={ expenseItem.expenseId } expenseItem={ expenseItem } />
 ))}



</ul>

	)



}



export default ExpenseItemsFiltered
