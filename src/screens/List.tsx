import { FlatList, Text, View, VStack } from 'native-base'
import { useContext, useState } from 'react'
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
  const { setDirection } = useContext(scrollYContext)
  const [offset, setOffset] = useState(0)

  return (
    <View h="full" bg="white">
      <FlatList
        onScroll={e => {
          const currentOffset = e.nativeEvent.contentOffset.y
          const direction = currentOffset > offset ? 'down' : 'up'
          setOffset(currentOffset)
          setDirection(direction)
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        style={{ paddingHorizontal: 24 }}
        data={lista}
        renderItem={({ item }) =>
          <VStack
            space="2"
            h={'40'}
            my={4}
            p={4}
            bg="cyan.700"
            rounded="lg"
            shadow="5"
          >
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
