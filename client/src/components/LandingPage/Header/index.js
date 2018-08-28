import React, { Component } from 'react';
import { MenuIcon } from '../../../assets/icons';

const ListMenu = () => (
  <ul className="nav">
    <li><a href="/">Home</a></li>
    <li><a href="/">Contact</a></li>
    <li><a href="/">About</a></li>
  </ul>
);

const MobileListMenu = ({ onClick, menuActive }) => (
  <ul className={`mobile-nav expanded-${menuActive}`}>
    {!menuActive
      ? <MenuIcon onClick={onClick} />
      : <ListMenu />
    }
  </ul>
);

export class Header extends Component {
  state = {
    width: null,
    menuActive: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.onresize = () => this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    this.setState({ width });
  }

  toggleMenu = () => this.setState((prevState, props) => ({
    menuActive: !prevState.menuActive,
  }));

  render() {
    const { menuActive } = this.state;
    return (
      <div className="header">
        <h1>CodeBuddy</h1>
        {this.state.width > 700
          ? <ListMenu />
          : <MobileListMenu onClick={this.toggleMenu} menuActive={menuActive} />
        }
      </div>
    );
  }
}
