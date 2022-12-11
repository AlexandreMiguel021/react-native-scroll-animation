import { IconButton, Text } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { MotiView, SafeAreaView } from 'moti'
import { scrollYContext } from '../context/scrollY'
import { useContext } from 'react'
import Animated from 'react-native-reanimated'

type HeaderProps = NativeStackHeaderProps

export function Header({ navigation, back, ...rest }: HeaderProps) {
  const showGoBackButton = !!back
  const routeTitle = rest.options.title
  const { scrollY } = useContext(scrollYContext)
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white'
      }}
    >
      <Animated.View
        style={{
          height: scrollY.interpolate({
            inputRange: [10, 160, 186],
            outputRange: [60, 20, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 186],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
          }),
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {showGoBackButton &&
          <IconButton
            size="md"
            onPress={navigation.goBack}
            icon={<MaterialIcons size={24} name="arrow-back-ios" />}
          />}
        <Text textAlign="center" fontSize="lg">
          {routeTitle}
        </Text>
        <IconButton disabled zIndex={-1} opacity={0} size="md" />
      </Animated.View>
    </SafeAreaView>
  )
}
