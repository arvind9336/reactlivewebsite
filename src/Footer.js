import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
        <footer className='bg-light text-center'>
            <p>All Right reserved | Terms and Conditions</p>
            <p><FaInstagram /> <FaLinkedin /></p>
        </footer>
    </>
  )
}
