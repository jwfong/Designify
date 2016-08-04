import React, { Component } from 'react';
import ListItem from './listItem.component.jsx';
import AddItemButton from '../../app/addItemButton.component.jsx';

class CardList extends Component {
  render() {
    const listNames = Object.keys(this.props.list);
    return (
      <div className="CardList">
        {listNames.map(itemName => (
            <ListItem
              key={ itemName }
              title={ itemName }
              clickHandler={this.props.clickHandler}
            />
          )
        )}
        <AddItemButton view={this.props.view === 'rooms' ? 'room' : 'furniture'} />
      </div>
    );
  }
}

export default CardList;