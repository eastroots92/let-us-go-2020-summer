import { Helmet } from "react-helmet"
import React from "react"
import thumbnail from '../../resources/thumbnail.png';
import icon from '../../resources/icon.jpg';

const title = 'Let us:GO! 2020 SUMMER';
const description = 'let us: Go! iOS 개발 세미나가 2020년 올해 처음 유튜브 라이브 방송으로 여러분을 찾아갑니다!';

export const Head = () => (
  <Helmet
    htmlAttributes={{ lang: 'ko' }}
    title='Let us:GO! 2020 SUMMER'
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0, viewport-fit=cover',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: thumbnail,
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
  >
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-MFSKCG7"></script>
    <link rel="shortcut icon" href={icon}/>
    <link rel="stylesheet" href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css" />
    <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css" />
  </Helmet>
)
