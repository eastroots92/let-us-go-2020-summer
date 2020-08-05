import React from "react";
import "../normalize.css";
import { Head } from "../components/head";
import { Hero } from "../components/hero"
import { FloatingButton } from "../components/floating-button"

export default () => {
  return (
    <>
      <Head />
      <Hero />
      <FloatingButton />
    </>
  )
}
