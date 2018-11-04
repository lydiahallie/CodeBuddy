import * as React from 'react';
import { Component } from 'react';
import { MenuIcon } from '../../../assets/icons';

const ListMenu = () => (
  <ul className="nav">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/">Contact</a>
    </li>
    <li>
      <a href="/">About</a>
    </li>
  </ul>
);

interface MobileListMenuProps {
  onClick: () => void
  menuActive: boolean
}

const MobileListMenu = ({ onClick, menuActive }: MobileListMenuProps) => (
  <ul className={`mobile-nav expanded-${menuActive}`}>
  // @ts-ignore
    {!menuActive ? <MenuIcon onClick={onClick} /> : <ListMenu />}
  </ul>
);

interface State {
  width: number
  menuActive: boolean
} 

export default class Header extends Component<{}, State> {
  state = {
    width: 0,
    menuActive: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.onresize = () => this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    const width =
      // @ts-ignore
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this.setState({ width });
  };

  toggleMenu = () =>
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));

  render() {
    const { menuActive, width } = this.state;
    return (
      <div className="header">
        <h1>CodeBuddy</h1>
        {width > 700 ? (
          <ListMenu />
        ) : (
          <MobileListMenu onClick={this.toggleMenu} menuActive={menuActive} />
        )}
      </div>
    );
  }
}
