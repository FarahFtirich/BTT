import React from 'react'
import welcome1 from "../images/welcome1.jpg"



export default function Welcome() {
  return (
      <section className="container2">
      <div className="welcome__image">
          <img src={welcome1} alt="Welcome" />
          <h1 className="welcome__title">Glad to see You! </h1>
          <p className="welcome__title2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
  )
}
