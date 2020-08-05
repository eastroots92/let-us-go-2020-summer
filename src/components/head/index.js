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
  >
    <link rel="stylesheet" href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css" />
    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
  </Helmet>
)
