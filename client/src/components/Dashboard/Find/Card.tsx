import * as React from 'react';
import { Component } from 'react';
import InfoBox from '../styled_components/InfoBox';
import { ProgressBar } from '../DashboardView/InfoBoxes';
import CardContact from './CardContact';
import { User, Skill } from './types'

interface CardButtonProps {
  btn: string 
  changeView: (x: string) => void
  active?: string
}

const CardButton = ({ btn, changeView }: CardButtonProps) => (
  <div className="find-btn-swipe" onClick={() => changeView(btn.toLowerCase())}>
    {btn}
  </div>
);

interface CardAboutProps {
  text: string
}

const CardAbout = ({ text }: CardAboutProps) => (
  <div className="card-col-info-about">
    <p>{text}</p>
  </div>
);

interface CardSkillProps {
  skills: Skill[]
};

const CardSkills = ({ skills }: CardSkillProps) => (
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


interface CardProps {
  i: number
  user: User
  currentUser: User
}

interface CardState {
  active: string
  expanded: boolean
}

export default class Card extends Component<CardProps, CardState> {
  constructor(props) {
    super(props);
    this.state = {
      active: 'about',
      expanded: false,
    };
  }

  showIcons = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  changeView = view => {
    this.setState({ active: view });
  };

  render() {
    const { user, i } = this.props;
    const { active } = this.state;
    return (
      <InfoBox margin nojustify size={300} height={500} data-style={i} className="user-find-card">
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
          <CardButton btn="About" active={active} changeView={this.changeView} />
          <CardButton btn="Contact" active={active} changeView={this.changeView} />
        </div>
        <div className={`indicator active-${active}`} />
        {active === 'about' ? (
          <div className="card-user-info-col">
            <CardSkills skills={user.profile.skills} />
            <CardAbout text={user.profile.description} />
          </div>
        ) : (
          <CardContact user={user} />
        )}
      </InfoBox>
    );
  }
};
