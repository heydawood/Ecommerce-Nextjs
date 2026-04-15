'use client'

import React from 'react'
import Footer from '../components/layout/Footer/Footer'
import { Navbar } from '../components/layout/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';

const layout = ({children}: { children: React.ReactNode; role: string | null; }) => {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <main className="container mx-auto py-6">{children}</main>
    <Footer />
    </Provider>
    </>
  )
}

export default layout