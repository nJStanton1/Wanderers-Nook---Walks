// Imports
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Navbar from './navbar'

// Define components
const Layout = ({ pageTitle, children }) => {

    
    //Return final layout here
    return (
      <div className="flex flex-col items-center w-screen min-h-screen bg-main-green">
        <div className='w-full items-center bg-second-green border-b-4 border-red'>
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