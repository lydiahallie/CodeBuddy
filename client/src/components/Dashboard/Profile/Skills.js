import React, { Component } from 'react';
import { Field } from 'redux-form';
import shortid from 'short-id';

import { USED_LANGUAGES } from './formInfo';
import { ProgressBar } from '../DashboardView/InfoBoxes';

class Skill extends Component {
	state = { width: 0 };

	updateWidth = e => this.setState({ width: e.target.value * 1.2 });

	componentDidMount() {
		const { skill } = this.props;
 		this.setState({ width: skill.value * 1.2 });
	}

	render() {
		const { i, skill } = this.props;
		return (
			<div className="user-profile-skill">
				<Field component="select" name={`lang${i}`}>
					<option value="" disabled>{skill.lang}</option>
					{USED_LANGUAGES.map(lang => 
						<option key={shortid.generate()} value={lang}>{lang}</option>
					)}
				</Field>
				<ProgressBar width={this.state.width} />
				<Field 
					component="input" 
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

export const Skills = ({info, skills}) => (
	<div className="user-profile-skills">
		<span id="profile-span-text">Skills</span>
		{skills.map((skill, i) => 
			<Skill 
				skill={skill} 
				key={ shortid.generate() }
				i={i} 
			/> 
		)}
	</div>
);