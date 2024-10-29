import React from 'react'
import Contact from './Contact'

const ContactsList = ({mook}) => {
  return (
    <div>
      {mook.map((data) => <Contact contact={data} key={data.id}/>)}
    </div>
  )
}

export default ContactsList