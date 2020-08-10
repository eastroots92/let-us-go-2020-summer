import S from './styles';
import React from "react"
import scheduleIcon from '../../resources/schedule.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

const downlaodLink = 'https://letusgo.s3.ap-northeast-2.amazonaws.com/letUsGo2020.ics';

export const FloatingButton = () => (
  <S.Button
    href={downlaodLink}
    target='_blank'
    onClick={ GAClickEvent('플로팅_버튼', GA_ACTION.CLICK, '스케쥴') }
  >
    <S.Icon src={scheduleIcon} />
    <span>Add Schedule</span>
  </S.Button>
)
