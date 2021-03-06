import React from "react"

import "./InstagramError.css"

function InstagramError({ message }) {
  return (
    <div className="InstagramError Content">
      <span>{message}</span>
      <p>
        <a className="Link" href="/aura-social/">
          <span>Try Again</span>
        </a>
      </p>
    </div>
  )
}

export default InstagramError
