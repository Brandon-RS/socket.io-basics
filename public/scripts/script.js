var socket = io()

socket.on('connect', function () {
  console.log('Connected to the server')
})

socket.on('disconnect', () => {
  console.log('Connection lose')
})

socket.emit('message', { name: 'Bruce', source: 'Web' })

socket.on('message', (payload) => {
  console.log(payload)
})

socket.on('active-bands', (payload) => {
  console.clear()
  console.table(payload)
})

socket.emit('vote-band', { id: '001dbdfc-e311-4b34-9033-b87e6ae44e94' })
