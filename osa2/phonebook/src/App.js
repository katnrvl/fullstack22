import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleAdd = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAdd}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2> 
      <ul>
        {persons.map(name => 
          <p>{name.content}</p>
        )}
      </ul>
      
    </div>
  )
}

export default App