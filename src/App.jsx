import React from 'react'

import NavBaar from './component/NavBaar'
import Footer from './component/Footer'
import AddNotes from './component/AddNotes'

const App = () => {
  return (
    <div className='bg-[#0F172A]'>
      <NavBaar />
      <AddNotes />
      <Footer />
    </div>
  )
}

export default App