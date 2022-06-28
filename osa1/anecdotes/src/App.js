import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const DisplayVotes = ({ votes, index }) => <p>has {votes[index]} votes</p>

const DisplayMostVotes = ({ anecdotes, votes, index }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)

  const votes = Array(anecdotes.length).fill(0) 
  const [vote, setVote] = useState(votes) 

  const setTo = (value) => {
    let x = Math.floor(Math.random() * anecdotes.length)
    value(x)
  }

  const setToValue = (value) => {
    const copy = [...vote]
    copy[selected] += 1
    value(copy)
  }

  const mostVotesIndex = (value) => {
    return (
      value.indexOf(Math.max.apply(null, value))
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <DisplayVotes votes={vote} index={selected} />
      <Button onClick={() => setToValue(setVote)} text="vote" />
      <Button onClick={() => setTo(setSelected) } text="next anecdote" />
      <DisplayMostVotes anecdotes={anecdotes} votes={vote} index={mostVotesIndex(vote)} />
    </div>
  )
}

export default App