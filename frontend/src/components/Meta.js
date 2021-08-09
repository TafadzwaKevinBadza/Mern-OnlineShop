import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' type='image/png' href='/favicon.ico' sizes='16x16' />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'OnlineShop',
  description: 'We sell products Online',
  keywords: 'Electronics, Online Shopping',
}

export default Meta
