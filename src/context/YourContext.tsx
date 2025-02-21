'use client'

import React, { createContext, useReducer } from 'react'

export const YourContext = createContext(null)

export function YourProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <YourContext.Provider value={{ state, dispatch }}>
      {children}
    </YourContext.Provider>
  )
} 