import React from 'react'

const Home = () => {
  return (
      <div>
      <div>I am the home component. I am cool</div>
        <button onClick={() => {
          console.log('Clicked')
        }}>Click me</button>
      </div>)
}

export default Home
