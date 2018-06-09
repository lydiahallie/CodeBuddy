import React, { Component } from 'react';
import { Menu } from './Menu';

export  class SidePane extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }
  
  toggleSideBar = bool => {
    this.setState({ expanded: bool })
  }

  render() {
    const { changeView } = this.props;
    const { expanded } = this.state;
    return (
      <div 
        className={`sidepane expanded-${expanded}`} 
        onMouseEnter={ () => this.toggleSideBar(true) }
        onMouseLeave={ () => this.toggleSideBar(false) } >
        <Menu changeView={ changeView } />
      </div>
    );
  }
}