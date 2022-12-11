import { View } from 'native-base'
import { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return (
    <View>
      {children}
    </View>
  )
}
