// Imports
import * as React from 'react'
import Navbar from './navbar'

// Define components
const Layout = ({ children }) => {

    
    //Return final layout here
    return (
      <div className="flex flex-col items-center pb-52 w-screen min-h-screen bg-main-green">
        <div className='w-full items-center bg-second-green border-b-4 border-accent-red'>
          <Navbar />
        </div>
        
        <main className='max-w-4xl'>
          {children}
        </main>
        
      </div>
    )
  }

  // Exports
  export default Layout