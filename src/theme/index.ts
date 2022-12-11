import { extendTheme } from 'native-base'

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontSize: 'md'
      }
    }
  }
})
