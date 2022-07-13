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

import ExpenseItems from './components/Expenses/ExpenseItems'
import AddExpenseItem from './components/AddExpenseItem/AddExpenseItem'



const App = () => {



  const expenseItems = [

    {
      expenseId: 'expense_1',
      expenseDate: new Date(2000, 7, 1),
      expenseTitle: 'item_1',
      expenseCurrense: '$',
      expenseAmount: 100
    },
    {
      expenseId: 'expense_2',
      expenseDate: new Date(2001, 7, 1),
      expenseTitle: 'item_2',
      expenseCurrense: '$',
      expenseAmount: 200
    },
    {
      expenseId: 'expense_3',
      expenseDate: new Date(2002, 7, 1),
      expenseTitle: 'item_3',
      expenseCurrense: '$',
      expenseAmount: 300
    }

  ]


  return (

    <div className="App">



      <AddExpenseItem />

      <ExpenseItems expenseItems={ expenseItems } />



    </div>

  );



}



export default App;
