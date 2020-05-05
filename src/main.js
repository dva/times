import './hmr'

const start = new Date().getTime()
let time = 0
let elapsed = '0.0'

function instance () {
  time += 100

  elapsed = Math.floor(time / 100) / 10
  if (Math.round(elapsed) === elapsed) { elapsed += '.0' }

  document.getElementById('root').textContent = elapsed
  document.title = elapsed

  const diff = (new Date().getTime() - start) - time
  window.setTimeout(instance, (100 - diff))
}

window.setTimeout(instance, 100)
