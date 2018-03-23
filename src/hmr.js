import * as debug from './debug'

if (module.hot) {
  module.hot.dispose(function () {
    debug.inform('module is about to be replaced')
  })

  module.hot.accept(function () {
    debug.inform('module or one of its dependencies was just updated')
  })
}
