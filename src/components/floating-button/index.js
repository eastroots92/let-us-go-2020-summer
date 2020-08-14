import S from './styles';
import React from "react"
import youtube from '../../resources/youtube_b.svg';
import { GA_ACTION, GAClickEvent } from "../../utils/ga"

const youtubeLink = 'https://youtu.be/i0FMti8pOsk';

export const FloatingButton = () => (
  <S.Button
    href={youtubeLink}
    target='_blank'
    onClick={ GAClickEvent('플로팅_버튼', GA_ACTION.CLICK, '유튜브') }
  >
    <S.Icon src={youtube} />
    <span>Live Seminar</span>
  </S.Button>
)
