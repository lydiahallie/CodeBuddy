import * as  React from 'react';
import { Component } from 'react';
import shortid from 'short-id';

import USED_LANGUAGES from './formInfo';
import { ProgressBar } from '../DashboardView/InfoBoxes';

interface Props {
  skill: any
  i: number
}

class Skill extends Component<Props, {}> {
  state = { width: 0 };

  componentDidMount() {
    const { skill } = this.props;
    this.setState({ width: skill.value * 1.2 });
  }

  updateWidth = e => this.setState({ width: e.target.value * 1.2 });

  render() {
    const { i, skill } = this.props;
    const { width } = this.state;
    return (
      <div className="user-profile-skill">
        <select name={`lang${i}`}>
          <option value="" disabled>
            {skill.lang}
          </option>
          {USED_LANGUAGES.map(lang => (
            <option key={shortid.generate()} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <ProgressBar width={width} />
        <input
          onChange={e => this.updateWidth(e)}
          placeholder={skill.value}
          type="number"
          name={`val${i}`}
          max="100"
        />
      </div>
    );
  }
}

const Skills = ({ skills, info }) => (
  <div className="user-profile-skills">
    <span id="profile-span-text">Skills</span>
    {skills.map((skill, i) => (
      <Skill skill={skill} i={i} />
    ))}
  </div>
);

export default Skills;
