import S from './styles';
import React from "react"
import scheduleIcon from '../../resources/schedule.svg';

const link = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86c3c0f9-f84b-4d5f-a3f6-7ca3c46180a4/letUsGo2020.ics?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200807T081533Z&X-Amz-Expires=86400&X-Amz-Signature=d3e749480de4d1aebe773636df03a0b73ab7747f9cd9fc25058176bad36fc46b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22letUsGo2020.ics%22';

export const FloatingButton = () => (
  <S.Button href={link} target='_blank'>
    <S.Icon src={scheduleIcon} />
    <span>Add Schedule</span>
  </S.Button>
)
