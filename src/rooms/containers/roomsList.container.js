import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../../cardList/components/cardList.component';
import { addRoomFromDb, selectRoom } from '../actions/rooms.action';
import { bindActionCreators } from 'redux';
import { Row, Col} from 'react-materialize';
import BudgetView from '../../BudgetView/containers/budgetView.container';
import { getRooms } from '../../databaseAPI';

export default class RoomsList extends Component {
  componentWillMount() {
    const _this = this;
    getRooms(_this.props.addRoomFromDb);
  }

  render() {
    return (
      <Row>
        <Col s={12} m={6} l={6}>
          <div>
            <h3> Select your room</h3>
            <CardList
              clickHandler={this.props.selectRoom}
              intro={this.props.roomSelected}
              list={this.props.rooms}
              view="rooms"
            />
          </div>
        </Col>

        <Col s={12} m={6} l={6}>
          <h3>Budget Chart / Graph </h3>  
          <BudgetView 
            rooms={this.props.rooms}/>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ rooms, roomSelected }) {
  return { rooms, roomSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRoomFromDb, selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
