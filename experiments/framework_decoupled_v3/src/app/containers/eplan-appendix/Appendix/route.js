module.exports = {
	path: 'list/:id',
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [
				require('./Edit/route.js'),
				require('./Frames/route.js'),
				require('./Frame/route.js'),
			])
		})
	},
	getComponent(location, cb) {
		require.ensure([], (require) => {
			cb(null, require('./index.js').default)
		})
	}

}