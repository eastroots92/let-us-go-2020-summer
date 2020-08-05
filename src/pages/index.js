import React from "react";
import "../normalize.css";
import { Head } from "../components/head";
import { Hero } from "../components/hero"
import { FloatingButton } from "../components/floating-button"
import { About } from "../components/about"
import { Speakers } from "../components/speakers"

export default () => {
  return (
    <>
      <Head />
      <Hero />
      <About />
      <Speakers />
      <FloatingButton />
    </>
  )
}
