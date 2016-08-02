import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/CardList';
import { addRoom, selectRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import database from '../../database';
import { Row, Col} from 'react-materialize';
import BudgetView from '../../BudgetView/containers/BudgetView'

const rooms = database.rooms;

class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    const roomNames = Object.keys(rooms);
    roomNames.forEach(roomName => {
      const newRoom = {};
      newRoom[roomName] = rooms[roomName];
      return _this.props.addRoom(newRoom);
    });
  }

  render() {
    return (
      <Row>
        <Col s={12} m={6} l={6}>
          <div>
            <h3>Room selected: {this.props.roomSelected || 'No room selected yet'}</h3>
            <CardList
              clickHandler={this.props.selectRoom}
              intro={this.props.roomSelected}
              list={this.props.rooms}
              store={this.props.store}
            />
          </div>
        </Col>

        <Col s={12} m={6} l={6}>
          <h3>This is where the Budget Chart and Budget Graph will be</h3>
          <BudgetView
          store = {this.props.store}
          />
        </Col>
      </Row>
    

    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    roomSelected: state.roomSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRoom, selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);