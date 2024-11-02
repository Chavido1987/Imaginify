import React from 'react'
import Sidebar from '../component/shared/Sidebar'
import MobileNav from '../component/shared/MobileNav'


const  Layout = ({ children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <MobileNav/>
        <div className='root-container'>
           <div className='wrapper'>
              {children}
           </div>
        </div>
    </main>
  )
}

export default Layout