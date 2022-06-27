import { useState } from 'react'

// const StatisticLine = (props) => <p>{props.text} {props.value}</p>

const TableLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

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
      <table>
        <tbody>
          <TableLine text="good" value={props.go} />
          <TableLine text="neutral" value={props.ne} />
          <TableLine text="bad" value={props.ba} />
          <TableLine text="all" value={props.go + props.ne + props.ba} />
          <TableLine text="average" value={((props.go + (props.ba * -1)) / (props.go + props.ne + props.ba)).toFixed(1)} />
          <TableLine text="positive" value={(props.go / (props.go + props.ne + props.ba)).toFixed(1) + " %"} />
        </tbody>
      </table>
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
      <h1>statistics</h1>
      <Statistics go={good} ne={neutral} ba={bad} />
    </div>
  )
}

export default App