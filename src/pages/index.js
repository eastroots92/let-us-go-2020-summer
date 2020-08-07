import React from "react";
import "../normalize.css";
import { Head } from "../components/head";
import { Hero } from "../components/hero"
import { FloatingButton } from "../components/floating-button"
import { About } from "../components/about"
import { Speakers } from "../components/speakers"
import { Timetable } from "../components/timetable"
import { JoinUs } from "../components/join-us"
import { Footer } from "../components/footer"

export default () => {
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
