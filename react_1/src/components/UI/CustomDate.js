import './CustomDate.css'



const CustomDate = dataProps => {



  const month = dataProps.date.toLocaleString('en-US', { month: 'long' })
  const year = dataProps.date.getFullYear()
  const day = dataProps.date.toLocaleString('en-US', { day: '2-digit' })


  return (

    <div className='custom-date'>



      <div className='custom-date__month'>
        { month }
      </div>
      <div className='custom-date__year'>
        { year }
      </div>
      <div className='custom-date__day'>
        { day }
      </div>



    </div>

  )



}



export default CustomDate
