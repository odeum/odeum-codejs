module.exports={
  path:'/',
  getChildRoutes(location,cb){
      require.ensure([],(require)=>{
          cb(null,[
              require('./components/Dashboard/route.js'),
              require('./components/Forms/route.js')
          ])
      })
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/custom.js').default)
    })
  }
}
