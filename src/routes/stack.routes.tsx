import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack'
import { List } from '../screens/List'
import { Home } from '../screens/Home'
import { Header } from '../components/Header'

const { Screen, Navigator } = createNativeStackNavigator()

type StackParamsList = {
  home: undefined
  List: undefined
}

export type StackProps = NativeStackScreenProps<StackParamsList, 'home'>

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          header: props => <Header {...props} />,
          headerShown: true
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            title: 'Início'
          }}
        />
        <Screen
          name="list"
          component={List}
          options={{
            title: 'Lista'
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
