import React from 'react'
const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/MahdiBehi">MahdiBehi</a>
    </div>
  )
}

const Hello = ({name, age}) => {
  
  /*
  const name = props.name
  const age = props.age
  /*
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }*/

  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
    <p>
  
    Hello {name}, you are {age} years old
    
    </p>
    <p>So you were born in {bornYear()}</p>
    </div>
  )
}

/*
const App = () => {

  const now = new Date()

  const a = 10
  
  const b = 20

  const name = 'Peter'

  const age = 10

  console.log('Hello from app component')
  return (
  
    <div>
      <p>Greetings</p>
      <p>
        {a} plus {b} is {a+b}

        now is {}
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
        <Footer />

      </p>
    </div>

    )
  }
  */
  const App = (props) => {
    const {counter} = props
    return (
      <div><h1>{counter}</h1></div>
    )
  }

export default App