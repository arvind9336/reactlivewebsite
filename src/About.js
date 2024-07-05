import React from 'react'
import Common from './Common'
import web from "../src/image/man1.avif";

export default function About() {
  return (
    <div>
      <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now'/>
    </div>
  )
}
