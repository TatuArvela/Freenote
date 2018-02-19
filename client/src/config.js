const ip = window.location.hostname
const port = '4000'

const config = {
  server: {
    ip: ip,
    port: port,
    url: 'http://' + ip + ":" + port
  }
}

export default config
