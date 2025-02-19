import React from 'react'

const Card = ({name}) => {
  return (
    <div>
      <h1>Dodo Is {name?name:"here"}!!</h1>
    </div>
  )
}

export default Card
