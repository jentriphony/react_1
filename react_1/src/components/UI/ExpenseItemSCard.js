import './ExpenseItemSCard.css'



const ExpenseItemSCard = dataProps => {



  const classes = 'expense-item_s-card ' + dataProps.className


  return (

    <div className={ classes }>



      { dataProps.children }



    </div>

  )



}



export default ExpenseItemSCard
