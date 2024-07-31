// Imports
import * as React from 'react'
import Navbar from './navbar'

// Define components
export const Layout = ({ children }) => {

  //Return final layout here
  return (
    <div className="flex flex-col items-center pb-52 w-full min-h-screen bg-main-green">
      <div className='w-full items-center bg-second-green border-b-4 border-accent-red'>
        <Navbar />
      </div>
      
      <main className='w-screen max-w-4xl'>
        {children}
      </main>
    </div>
  )
}

export const Padding = ({ children }) => {
  return(
    <div className='w-full px-3 md:px-5 lg:px-3'>
      {children}
    </div>
  )
}