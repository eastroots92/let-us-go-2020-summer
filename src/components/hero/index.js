import S from './styles';
import React from "react"
import badgeIcon1 from '../../resources/dg.png';
import badgeIcon2 from '../../resources/js.png';
import badgeIcon3 from '../../resources/hj.png';
import badgeIcon4 from '../../resources/badge2.svg';
import badgeIcon5 from '../../resources/mask.png';
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
        Let us: Go!
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
      <a
        href='https://github.com/eastroots92'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이동근') }
      ><S.Badge1 src={badgeIcon1} /></a>
      <a
        href='https://github.com/JeaSungLEE'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '이재성') }
      ><S.Badge2 src={badgeIcon2} /></a>
      <a
        href='https://www.behance.net/wwwhyeongj4196'
        target='_blank'
        onClick={ GAClickEvent('히어로_버튼', GA_ACTION.CLICK, '김형진') }
      ><S.Badge3 src={badgeIcon3} /></a>
      <S.Badge4 src={badgeIcon4} />
      <S.Badge5 src={badgeIcon5} />
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
