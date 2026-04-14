import React from 'react'
import Footer from '../components/layout/Footer/Footer'
import { Navbar } from '../components/layout/Navbar/Navbar';

const layout = ({children}: { children: React.ReactNode; role: string | null; }) => {
  return (
    <>
    <Navbar/>
    <main className="container mx-auto py-6">{children}</main>
    <Footer />
    </>
  )
}

export default layout