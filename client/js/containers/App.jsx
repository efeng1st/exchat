import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Sidebar from '../components/sidebar/Sidebar'
import Overlay from '../components/overlay/Index'
import {fetchChannelsIfNeeded} from '../actions/channels'
import {fetchDirectChannels} from '../actions/directChannels'
import {fetchUsers} from '../actions/users'

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props

    dispatch(fetchChannelsIfNeeded())
    dispatch(fetchUsers())
    dispatch(fetchDirectChannels())
  }

  render() {
    const {dispatch, channels, children, local, errors, directChannels} = this.props

    return (
      <div className="app-container" style={style.container}>
        <Overlay {...{local, channels, dispatch, errors}} style={style.container}></Overlay>
        <div className="navigate-sidebar"  style={style.container}>
          <Sidebar dispatch={dispatch} channels={channels} directChannels={directChannels}/>
        </div>
        <div className="main-area" style={style.container}>
          { children || 'Welcome to Exchat! Another Slack-like app by Elixir, Phoenix & React(redux)' }
        </div>
      </div>
    )
  }
}

const style = {
  container: {
    height: '100%'
  }
}

App.propTypes = {
  channels: PropTypes.object,
  children: PropTypes.node,
  local: PropTypes.object
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    directChannels: state.directChannels,
    local: state.local,
    errors: state.errors
  }
}

export default connect(
  mapStateToProps
)(App)
