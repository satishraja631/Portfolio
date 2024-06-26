import React from 'react'
import '../Styles/Contact.css'

function Contact() {
    const Details=[
        {Name:'Name',value:'Satish Raja'},
        {Name:'Contact Number',value:'7660888577'},
        {Name:'Gmail',value:'satishrajadsr@gmail.com'},
        {Name:'LinkedIn',value:'Satish Raja Dhulipala'},
        
    ]
  return (
    <div className='Contact'>
        <h3>Thanks for reaching till here.</h3>
        <h3>Contact Details</h3>
        {Details.map((detail)=>(
          <div className='contact-detail'>
            <p>{detail.Name}</p>
            <p>{detail.value}</p>
          </div>
        ))}
    </div>
  )
}

export default Contact