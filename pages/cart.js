import React from 'react'
import { Layout, TypographyEl } from "../componets";

const cart = () => {
  return (
    <Layout title="главная" description="описание Home">
      <TypographyEl teg="h1" classN="span">
        Корзина
      </TypographyEl>
    </Layout>
  )
}

export default cart