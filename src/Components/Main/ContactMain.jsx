import React from 'react'
import PageheaderContact from '../Contact/PageheaderContact'
import Contactdetails from '../Contact/Contactdetails'
import Formdetails from '../Contact/Formdetails'
import Newsletter from '../Home/Newsletter'

const ContactMain = () => {
  return (
   <>
   <PageheaderContact/>
    <Contactdetails/>
    <Formdetails/>
    <Newsletter/> 
   </>
  )
}

export default ContactMain
