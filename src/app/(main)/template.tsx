import React from 'react'

export default function Template ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>{children}</div>
  )
}