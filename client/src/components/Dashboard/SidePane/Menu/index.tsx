import * as React from 'react';
import shortid from 'short-id';
import { Mutation } from 'react-apollo';
import { NavLink, withRouter } from 'react-router-dom';
import MENU_CONTENTS from './menuBtns';
import { LogOutIcon } from '../../../../assets/icons';
import logoutUser from './mutation';

interface Button {
  name: string 
  icon: JSX.Element
}

interface Props {
  history: any
}

const Menu = ({history}: Props) => (
  <div className="menu">
    {MENU_CONTENTS.map((btn: Button) => (
      <NavLink
        to={`/dashboard/${btn.name.toLowerCase()}`}
        className="btn-menu"
        activeClassName="active"
        key={shortid.generate()}
      >
        <div className="icon">{btn.icon}</div>
        {btn.name}
      </NavLink>
    ))}
    <Mutation mutation={logoutUser}>
    {logout => (
      <div 
        onClick={e => {
          e.preventDefault();
          logout()
            // TODO: Use react router instead.
            .then(() => {
              history.push('http://localhost:3000')
            })
        }} 
        className="btn-menu"
      >
        <div className="icon">
          <LogOutIcon />
        </div>
        Log Out
      </div>
    )}       
    </Mutation>
  </div>
);

export default withRouter(Menu);
