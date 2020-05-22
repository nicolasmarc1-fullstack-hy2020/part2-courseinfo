import React from 'react'

const Header = ({ name }) => {

  return (
    <h2>{name}</h2>
  )
}


const Content = ({ parts }) => {
  const sum = parts.reduce((accu, curval) => accu + curval.exercises, 0)
  return (
    <>
      {parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
      <Total sum={sum} />
    </>
  )
}
const Part = ({ part }) => {
  return (
    <p>{part.name} : {part.exercises}</p>
  )
}


const Total = ({ sum }) => {
  return (
    <p><strong>total of {sum} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course
