import S from './styles';
import React from "react"
import badgeIcon1 from '../../resources/dg.png';
import badgeIcon2 from '../../resources/js.png';
import badgeIcon3 from '../../resources/hj.png';
import badgeIcon4 from '../../resources/badge2.svg';
import badgeIcon5 from '../../resources/mask.png';
import badgeIcon6 from '../../resources/badge.svg';
import badgeIcon7 from '../../resources/badge3.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"
import { Timetable } from "../timetable"
import { FloatingButton } from "../floating-button"

const downArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAcCAYAAAAnbDzKAAAAAXNSR0IArs4c6QAAAQJJREFUWAnVmA0KgzAMRnuYndATeNjdo0vYAnHULkm/zFgo1Zqf90QYXWtq9N43mg+1VeqS2ZhxCEUPdpo8njTLSTDTh42Wvh8keIN31SglQVwaXjDfEnTHn81olJAgsBG88G7tR8ClEmY2c+Dhw8u9cTO5ExL5wyzhRKDMMsNygQUZWG9YIYcMvCe84EQmrVdaYSWT3iOzQWZt9Y5ayo/d3+DFBNkQWUv4TCuiMaKGCfYsaAVgJfeMJ7QfAYnkhOCsSR4gT6y1PyTOAmaJgcBEixgA+UwxGpeeNQ6+RDc7NdWGFxOHRJ03L/CyGiTqwhsk6sNPJO4DP5C4H/yXROq/fC/ZHeGCU7G+8wAAAABJRU5ErkJggg==';

export const Hero = () => {


  return (
    <S.Header>
      <S.SubTitle
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020 SUMMER
      </S.SubTitle>
      <S.Title
        id="hero"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        let us: Go!
      </S.Title>
      <S.Description
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        LIVE STREAMING
      </S.Description>
      <S.Contents
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        2020년 8월 15일 13:00~18:00
      </S.Contents>
      <S.SubContents
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="800"
        data-sal-easing="ease"
      >
        라이브 영상 링크는 당일 게시 될 예정입니다.
      </S.SubContents>
      <S.BadgeMask src={badgeIcon5} />
      <S.BadgeSwift src={badgeIcon7} />
      <S.BadgeStopUs src={badgeIcon6} />
      <a
        href='https://github.com/eastroots92'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이동근') }
      ><S.BadgeDG src={badgeIcon1} /></a>
      <a
        href='https://github.com/JeaSungLEE'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이재성') }
      ><S.BadgeJS src={badgeIcon2} /></a>
      <a
        href='https://www.behance.net/wwwhyeongj4196'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '김형진') }
      ><S.BadgeHJ src={badgeIcon3} /></a>
      <S.ArrowWrap
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="1000"
        data-sal-easing="ease"
      >
        <span>내용 더보기</span>
        <S.DownArrow src={downArrow}/>
      </S.ArrowWrap>
      <FloatingButton />
    </S.Header>
  )
}
