import React from 'react'

export default function DashboardLayout({children,user,admin}:{children:React.ReactNode,user:React.ReactNode,admin:React.ReactNode}) {
  return <>
  {children}
  <div className='flex justify-around p-10'>

  {user}
  {admin}
  </div>
  </>
}
