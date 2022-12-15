import { IconButton, Text } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { MotiSafeAreaView } from 'moti'
import { scrollYContext } from '../context/scrollY'
import { Fragment, useContext } from 'react'

type HeaderProps = NativeStackHeaderProps

export function Header({ navigation, back, ...rest }: HeaderProps) {
  const showGoBackButton = !!back
  const routeTitle = rest.options.title
  const { direction } = useContext(scrollYContext)
  return (
    <Fragment>
      <MotiSafeAreaView
        from={{
          height: direction === 'down' ? 0 : 100
        }}
        transition={{
          type: 'timing'
        }}
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
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
      </MotiSafeAreaView>
    </Fragment>
  )
}
