import React from 'react';
import { connect } from 'react-redux';
import { InfoBox } from './InfoBoxes';
// import { Bar } from 'react-chartjs';
// import { CardSkills } from '../Find/Find';

const StatsInfo = ({val, name, line}) => (
  <React.Fragment>
    <div className='dash-user-col'>
      <span className='proj-num'>{val}</span> {name}
    </div>
    { line && <div id='horiz-line' /> }
  </React.Fragment>
);

export const DashUserProfile = ({currentUser, messages}) => (
  currentUser!== undefined &&
    <InfoBox none margin odd size={400} height={700}>
      <div className='dash-profile'>
        <div className='dash-user-info'>
          <img src={currentUser.profile.img} alt='' />
          <div>
            <h3>{currentUser.firstName} {currentUser.lastName}</h3>
            <h5>{currentUser.profile.title}</h5>
            <button id='edit-profile'>Edit Profile</button>
          </div>
        </div>
        <div className='dash-user-row'>
          <StatsInfo line val={3} name='projects' />
          <StatsInfo line val={67} name='connections' />
          <StatsInfo val={7} name='posts' />
        </div>
        {/* <CardSkills user={currentUser} /> */}
        {/* <Bar data={CHART_DATA} width='250' height='300'/> */}
      </div>
    </InfoBox>
);

const mapStateToProps = state => {
  return {
    currentUser: state.user[0],
    messages: state.messages,
  }
}

export const DashProfile = connect(mapStateToProps)(DashUserProfile)