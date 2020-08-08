import React, { useEffect, useState } from "react"
import "../normalize.css";
import { Head } from "../components/head";
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Speakers } from "../components/speakers"
import { Timetable } from "../components/timetable"
import { JoinUs } from "../components/join-us"
import { Footer } from "../components/footer"
import sendGAEvent, { GA_ACTION } from "../utils/ga"

export default () => {
  const [shownList, setShownList] = useState([]);
  useEffect(() => {
    sendGAEvent('메인화면', GA_ACTION.EXPOSE);
  }, [])

  useEffect(() => {
    const actionEvent = ({ detail }) => {
      const id = detail.target.id;
      if ( id && !shownList.includes(id)) {
        sendGAEvent(`메인화면_${id}`, GA_ACTION.EXPOSE);
        setShownList([...shownList, id]);
      }
    };

    window.removeEventListener('sal:in', actionEvent);
    window.addEventListener('sal:in', actionEvent);

    return () => window.removeEventListener('sal:in', actionEvent);

  }, [shownList]);


  return (
    <>
      <Head />
      <Hero />
      <About />
      <Speakers />
      <Timetable />
      <JoinUs />
      <Footer />
    </>
  )
}
