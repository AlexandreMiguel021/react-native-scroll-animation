import { Text, View, VStack } from 'native-base'
import { useContext } from 'react'
import Animated from 'react-native-reanimated'
import { scrollYContext } from '../context/scrollY'

const lista = [
  {
    id: '1',
    title: 'Item #1'
  },
  {
    id: '2',
    title: 'Item #2'
  },
  {
    id: '3',
    title: 'Item #3'
  },
  {
    id: '4',
    title: 'Item #4'
  },
  {
    id: '5',
    title: 'Item #5'
  },
  {
    id: '6',
    title: 'Item #6'
  },
  {
    id: '7',
    title: 'Item #7'
  },
  {
    id: '8',
    title: 'Item #8'
  },
  {
    id: '9',
    title: 'Item #9'
  }
]

export function List() {
  const { scrollY } = useContext(scrollYContext)
  return (
    <View h="full" bg="white">
      <Animated.FlatList
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scrollY }
            }
          }
        ])}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        style={{ paddingHorizontal: 24 }}
        data={lista}
        renderItem={({ item }) =>
          <VStack space="2" my={4} p={4} bg="cyan.700" rounded="lg" shadow="5">
            <Text color="white">
              {item.id}
            </Text>
            <Text color="white">
              {item.title}
            </Text>
          </VStack>}
      />
    </View>
  )
}
