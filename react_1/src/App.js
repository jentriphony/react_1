// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import './App.css';

import { useState } from 'react'
import AddExpenseItem from './components/AddExpenseItem/AddExpenseItem'
import ExpenseItems from './components/Expenses/ExpenseItems'



const initialExpenseItems = [

  {
    expenseId: 'expense_item_1',
    expenseDate: new Date(2000, 7, 1),
    expenseTitle: 'item_1',
    expenseCurrense: '$',
    expenseAmount: 100
  },
  {
    expenseId: 'expense_item_2',
    expenseDate: new Date(2001, 7, 1),
    expenseTitle: 'item_2',
    expenseCurrense: '$',
    expenseAmount: 200
  },
  {
    expenseId: 'expense_item_3',
    expenseDate: new Date(2002, 7, 1),
    expenseTitle: 'item_3',
    expenseCurrense: '$',
    expenseAmount: 300
  }

]

const App = () => {



	const [expenseItems, setExpenseItems] = useState(initialExpenseItems)



  const addExpenseItemHandler = expenseItemInputData => {

		setExpenseItems(previousExpenseItems => {
			expenseItemInputData.expenseId += previousExpenseItems.length + 1
			return [
				...previousExpenseItems,
				expenseItemInputData
			]
		})

	}


  return (

<div className="App">



 <AddExpenseItem onAddExpenseItem={ addExpenseItemHandler } />

 <ExpenseItems expenseItems={ expenseItems } />



</div>

  )



}



export default App
