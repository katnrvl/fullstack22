import { useState } from 'react'

const Statistics = () => {
  return (
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good + (bad * -1)) / (good + neutral + bad)}</p>
    <p>positive {good / (good + neutral + bad)} %</p>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const setToValue = (value, newValue) => {
    value(newValue)
  }

  return (
    <div>
      <h1>leave feedback</h1>
      <Button handleClick={() => setToValue(setGood, good + 1)} text="good" />
      <Button handleClick={() => setToValue(setNeutral, neutral + 1)} text="neutral" />
      <Button handleClick={() => setToValue(setBad, bad + 1)} text="bad" />
      <Statistics />
      <Stats />
    </div>
  )
}

export default App