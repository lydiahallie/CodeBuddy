import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import InfoBox from '../styled_components/InfoBox';
import { profileQuery } from './query';
// import { Bar } from 'react-chartjs';
// import { CardSkills } from '../Find/Find';

const StatsInfo = ({ val, name, line }) => (
  <React.Fragment>
    <div className="dash-user-col">
      <span className="proj-num">{val}</span> {name}
    </div>
    {line && <div id="horiz-line" />}
  </React.Fragment>
);

const DashUserProfile = () => (
  <Query query={profileQuery}> 
    {({data}) => {  
      const { user } = data;
      return user ? (
        <InfoBox none odd margin size={400} height={700}>
          <div className="dash-profile">
            <div className="dash-user-info">
              <img src={user.profile.img} alt="" />
              <div>
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <h5>{user.profile.title}</h5>
                <button id="edit-profile">Edit Profile</button>
              </div>
            </div>
            <div className="dash-user-row">
              <StatsInfo line val={3} name="projects" />
              <StatsInfo line val={67} name="connections" />
              <StatsInfo val={7} name="posts" />
            </div>
            {/* <CardSkills user={currentUser} /> */}
            {/* <Bar data={CHART_DATA} width='250' height='300'/> */}
          </div>
        </InfoBox>
      ) : <InfoBox none odd margin size={400} height={700} />
    }}
  </Query>
);

StatsInfo.propTypes = {
  val: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  line: PropTypes.bool,
};

StatsInfo.defaultProps = {
  line: false,
};

export default DashUserProfile;
