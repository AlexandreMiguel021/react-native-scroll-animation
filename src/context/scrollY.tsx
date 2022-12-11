import { createContext, ReactNode, useState } from 'react'
import Animated from 'react-native-reanimated'

export const scrollYContext = createContext({} as any)

export function ScrollYProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const [direction, setDirection] = useState()

  return (
    <scrollYContext.Provider
      value={{
        scrollY,
        setScrollY,
        setDirection,
        direction
      }}
    >
      {children}
    </scrollYContext.Provider>
  )
}
