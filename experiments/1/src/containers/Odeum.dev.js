import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'

const Odeum = ({ store, history }) => (
  <Provider store={store}>
    <div id="Odeum">
      <Router history={history} routes={routes} />
    </div>
  </Provider>
)

Odeum.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Odeum