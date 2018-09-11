import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import InfoBox from '../styled_components/InfoBox';
import { ProgressBar } from '../DashboardView/InfoBoxes';
import CardContact from './CardContact';

const CardButton = ({ btn, changeView }) => (
  <div className="find-btn-swipe" onClick={() => changeView(btn.toLowerCase())}>
    {btn}
  </div>
);

const CardAbout = ({ text }) => (
  <div className="card-col-info-about">
    <p>{text}</p>
  </div>
);

const CardSkills = ({ skills }) =>
  skills && (
    <div className="card-col-info">
      <div className="card-col-skills">
        {skills.slice(0, 3).map(skill => (
          <div className="skill" id={skill.lang.toLowerCase()}>
            <span id="skill-name">{skill.lang}:</span>
            <ProgressBar width={skill.value} />
          </div>
        ))}
      </div>
    </div>
  );

class Card extends Component {
  constructor() {
    super();
    this.state = {
      active: 'about',
    };
  }

  showIcons = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  changeView = view => {
    this.setState({ active: view });
  };

  onSubmit = values => {
    const { user, currentUser, fetchMessages } = this.props;
    axios.post('/api/add_message', { values, user, currentUser });
    fetchMessages();
  };

  render() {
    const { user, i } = this.props;
    const { active } = this.state;
    return (
      <InfoBox
        margin
        nojustify
        size={300}
        height={500}
        data-style={i}
        className="user-find-card"
      >
        <div className="card-user-info">
          <img src={user.profile.img} alt={user.firstName} />
          <div className="card-info">
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <h4>{user.profile.title || 'Developer'}</h4>
          </div>
        </div>
        <div className="find-btns-swipe">
          <CardButton
            btn="About"
            active={active}
            changeView={this.changeView}
          />
          <CardButton
            btn="Contact"
            active={active}
            changeView={this.changeView}
          />
        </div>
        <div className={`indicator active-${active}`} />
        {active === 'about' ? (
          <div className="card-user-info-col">
            <CardSkills skills={user.profile.skills} />
            <CardAbout text={user.profile.description} />
          </div>
        ) : (
          <CardContact user={user} onSubmit={this.onSubmit} />
        )}
      </InfoBox>
    );
  }
}

CardButton.propTypes = {
  btn: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

CardAbout.propTypes = {
  text: PropTypes.string.isRequired,
};

Card.propTypes = {
  i: PropTypes.number.isRequired,
  user: PropTypes.shape({
    profile: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          lang: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          // eslint-disable-next-line comma-dangle
        })
      ).isRequired,
      level: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    __v: PropTypes.number,
  }).isRequired,
  currentUser: PropTypes.shape({
    profile: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.bool.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          lang: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          // eslint-disable-next-line comma-dangle
        })
      ).isRequired,
      level: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    __v: PropTypes.number,
  }).isRequired,
  fetchMessages: PropTypes.func,
};

Card.defaultProps = {
  fetchMessages: undefined,
};

export default Card;
