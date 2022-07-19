import React from 'react'

const Course = ({ course }) => 
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
  parts.map(p => 
    <Part part={p} />
  )

const Total = ({ parts }) => 
  <b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>

export default Course 