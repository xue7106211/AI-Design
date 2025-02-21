'use client'

import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
      return state
  }
}

export function YourComponent() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  )
} 