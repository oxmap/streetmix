import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import NOTIFICATION from '../../../app/data/notification.json'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import flow from 'lodash/flow'

import NotificationBar from './NotificationBar'
import MenusContainer from '../menus/MenusContainer'
import StreetNameCanvas from '../streets/StreetNameCanvas'
import InfoBubble from '../info_bubble/InfoBubble'
import WelcomePanel from './WelcomePanel'
import Palette from './Palette'
import DialogRoot from '../dialogs/DialogRoot'
import StatusMessage from './StatusMessage'
import NoConnectionMessage from './NoConnectionMessage'
import Flash from './Flash'
import DebugInfo from './DebugInfo'
import Gallery from '../gallery/Gallery'
import GalleryShield from '../gallery/GalleryShield'
import BlockingShield from './BlockingShield'
import BlockingError from './BlockingError'
import StreetView from './StreetView'
import DebugHoverPolygon from '../info_bubble/DebugHoverPolygon'
import PrintContainer from './PrintContainer'

class App extends React.PureComponent {
  static propTypes = {
    locale: PropTypes.object
  }

  render () {
    return (
      <React.Fragment>
        <IntlProvider
          locale={this.props.locale.locale}
          key={`3_${this.props.locale.locale}`}
          messages={this.props.locale.messages}
        >
          <React.Fragment>
            <BlockingShield />
            <BlockingError />
            <Gallery />
            <NotificationBar notification={NOTIFICATION} />
          </React.Fragment>
        </IntlProvider>
        <div className="main-screen">
          <IntlProvider
            locale={this.props.locale.locale}
            key={this.props.locale.locale}
            messages={this.props.locale.messages}
          >
            <React.Fragment>
              <GalleryShield />
              <MenusContainer />
              <StreetNameCanvas />
              <InfoBubble />
              <DebugHoverPolygon />
              <WelcomePanel />
              <Palette />
              <DialogRoot />
              <StatusMessage />
              <NoConnectionMessage />
            </React.Fragment>
          </IntlProvider>

          <StreetView />
        </div>

        <Flash />
        <DebugInfo />
        <PrintContainer />
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    locale: state.locale
  }
}

export default flow(
  connect(mapStateToProps),
  DragDropContext(HTML5Backend)
)(App)
