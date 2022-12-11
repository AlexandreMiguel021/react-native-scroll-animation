import { NativeBaseProvider } from 'native-base'
import { ScrollYProvider } from './src/context/scrollY'
import { Routes } from './src/routes'
import { theme } from './src/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollYProvider>
        <Routes />
      </ScrollYProvider>
    </NativeBaseProvider>
  )
}
