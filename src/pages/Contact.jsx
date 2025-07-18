import React, { useEffect} from 'react'
import ContactHero from '../components/ContactHero'
import BookingForm from '../components/BookingForm'

function Contact() {
   useEffect(() => {
        document.title = 'Contact | Services_Website';
      }, []);
  return (
    <div>
        <ContactHero />
        <BookingForm />
    </div>
  )
}

export default Contact