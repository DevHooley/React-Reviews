import React, { useState } from "react"
import Review from "./components/Review"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}
export default App
