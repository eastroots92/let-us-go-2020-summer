import { Helmet } from "react-helmet"
import React from "react"

export const Head = () => (
  <Helmet
    htmlAttributes={{ lang: 'ko' }}
    title='Let us:GO! 2020 SUMMER'
    meta={[
      {
        name: 'description',
        content: '대한민국 iOS 최고의 축제'
      }
    ]}
  />
)
