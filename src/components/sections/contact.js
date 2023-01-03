import React, { useRef } from "react"
import config from "../../config"
import Github from "../../assets/icons/github"
import Linkedin from "../../assets/icons/linkedin"
import Medium from "../../assets/icons/medium"

function Contact() {
  return (
    <>
      <div class="ml-auto mr-auto w-1/2 pt-4">
        <p class="pt-4">
            <a class="text-4xl">
                Want to get in touch?
            </a>
        </p>
        <div class="grid grid-cols-3 gap-10 text-center h-72 w-72 mt-10 m-auto">
          <a href={config.socialMedia[1].url}><Github /></a> 
          <a href={config.socialMedia[0].url}><Linkedin /></a>
          <a href={config.socialMedia[2].url}><Medium /></a>
        </div>
      </div>
    </>
  )
}
  
export default Contact;
