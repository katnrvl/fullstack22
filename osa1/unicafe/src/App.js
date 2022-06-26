import { useState } from 'react'

const Statistics = (props) => {
  if (props.go+props.ne+props.ba === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <div>
    <p>good {props.go}</p>
    <p>neutral {props.ne}</p>
    <p>bad {props.ba}</p>
    <p>all {props.go + props.ne + props.ba}</p>
    <p>average {(props.go + (props.ba * -1)) / (props.go + props.ne + props.ba)}</p>
    <p>positive {props.go / (props.go + props.ne + props.ba)} %</p>
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
      <Statistics go={good} ne={neutral} ba={bad} />
    </div>
  )
}

export default App