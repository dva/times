import { inform } from './debug'

if (module.hot) {
  module.hot.dispose(function () {
    inform('module is about to be replaced')
  })

  module.hot.accept(function () {
    inform('module or one of its dependencies was just updated')
  })
}
