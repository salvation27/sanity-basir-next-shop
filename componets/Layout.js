import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import { Container } from '@mui/material'
import {Footer} from './index'

const Layout = ({children,title,description}) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Sanity Amazona` : "Sanity Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Navbar />
      <Container component="main">{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout
