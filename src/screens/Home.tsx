import { useNavigation } from '@react-navigation/native'
import { Button, Text, View, VStack } from 'native-base'

export function Home() {
  const navigation = useNavigation()

  function goToConfigScreen() {
    navigation.navigate('list')
  }

  return (
    <View flex="1" justifyContent="center" alignItems="center" bg="gray.800">
      <VStack space={2} w="64">
        <Text textAlign="center" color="amber.100">
          Home screen
        </Text>
        <Button onPress={goToConfigScreen} size="md" colorScheme="cyan">
          Ir para configurações
        </Button>
      </VStack>
    </View>
  )
}
