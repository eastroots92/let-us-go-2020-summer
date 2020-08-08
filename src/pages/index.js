import React, { useEffect } from "react"
import "../normalize.css";
import { Head } from "../components/head";
import { Hero } from "../components/hero"
import { FloatingButton } from "../components/floating-button"
import { About } from "../components/about"
import { Speakers } from "../components/speakers"
import { Timetable } from "../components/timetable"
import { JoinUs } from "../components/join-us"
import { Footer } from "../components/footer"
import sendGAEvent, { GA_ACTION } from "../utils/ga"

export default () => {
  useEffect(() => {
    sendGAEvent('메인화면', GA_ACTION.EXPOSE);
  }, [])

  return (
    <>
      <Head />
      <Hero />
      <About />
      <Speakers />
      <Timetable />
      <FloatingButton />
      <JoinUs />
      <Footer />
    </>
  )
}
