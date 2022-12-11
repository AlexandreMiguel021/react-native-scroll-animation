import { StatusBar } from 'native-base'
import { Fragment } from 'react'
import { StackRoutes } from './stack.routes'

export function Routes() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <StackRoutes />
    </Fragment>
  )
}
