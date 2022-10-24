import React from 'react'

function Button({getGif}) {
  return (
    <div>

        <button onClick={getGif}>Randomize</button>
    </div>
  )
}

export default Button