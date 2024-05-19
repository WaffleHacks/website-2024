import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '@/hooks/index'

interface Faq {}

const TeamContext = createContext<Faq | undefined>(undefined)

export const TeamProvider: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({
  children
}) => {
  const [team, setTeam] = useLocalStorage('','')

  const toggleTeam = () => {
    setTeam(
      (prevTeam: '') => 
        (prevTeam === '' ? '' : '')
    )
  }

  return (
    <TeamContext.Provider 
      value={{
        team,toggleTeam
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export const useTeam = () => {
  const context = useContext(TeamContext)
  if (context === undefined) {
    throw new Error('useTeam must be used within a TeamProvider')
  }
  return context
}