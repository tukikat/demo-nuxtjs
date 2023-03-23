const middleware = {}

middleware['ref'] = require('..\\middleware\\ref.js')
middleware['ref'] = middleware['ref'].default || middleware['ref']

export default middleware
