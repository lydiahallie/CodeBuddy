import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { USERS } from '../../../data/mockdata.js';
import { Spinner } from '../../../assets/spinners';
import { InfoBox } from '../DashboardView/InfoBoxes';
import { ProgressBar } from '../DashboardView/InfoBoxes';
import { fetchMessages } from '../../../actions';
import { CardContact } from './CardContact';

// import { FILTER_OPTS } from '../../../data/options.js';

// class FilterBox extends Component {
//   constructor() {
//     super();
//     this.state = {
//       checked: false,
//       selectedLanguages: [],
//     }
//   }

//   updateFilter = name => {
//     this.setState({ checked: ! this.state.checked });
//     this.props.updateResults(name)
//   }

//   render() {
//     const { name } = this.props;
//     return (
//       <div 
//         className={`filter-box checked-${this.state.checked}`} 
//         onClick={ name => this.updateFilter(this.props.name) }>
//         {name}
//       </div>
//     );
//   }
// }

// const SearchBar = ({updateResults}) => (
//   <div className='searchbar'>
//     <div className='input-col'> 
//       { FILTER_OPTS.map(opt => (
//         <div className='filter-col'>
//           { opt.lang.slice(0, 3).map(x => <FilterBox name={x} updateResults={ updateResults } />)}
//         </div>
//       ))}
//     </div>
//   </div>
// );

const CardButton = ({btn, changeView}) => (
  <div 
    className='find-btn-swipe' 
    onClick={ () => changeView(btn.toLowerCase()) }>
    {btn}
  </div>
);

const CardAbout = ({text}) => (
  <div className='card-col-info-about'>
    <p>{text}</p>
  </div>
);

export const CardSkills = ({skills}) => (
  skills !== undefined && 
  <div className='card-col-info'>
    <div className='card-col-skills'>
      {skills.slice(0, 3).map(skill => 
        <div className='skill' id={skill.lang.toLowerCase()} >
          <span id='skill-name'>{skill.lang}:</span> 
          <ProgressBar width={skill.value} />
        </div> 
      )}
    </div> 
  </div>
);

class Card extends Component {
  constructor() {
    super();
    this.state = { 
      active: 'about',
    }
  }

  showIcons = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  changeView = view => {
    this.setState({ active: view })
  }

  onSubmit = values => {
    const { user, currentUser  } = this.props;
    axios.post('/api/add_message', { values, user, currentUser })
    this.props.fetchMessages();
  }
  
  render() {
    const { user, i } = this.props;
    const { active } = this.state;
    return (
      <InfoBox margin nojustify size={300} height={500} data-style={i} className='user-find-card'>
        <div className='card-user-info'>
          <img src={user.profile.img} alt={user.firstName} />
          <div className='card-info'>
            <h3>{user.firstName} {user.lastName}</h3>
            <h4>{user.profile.title || 'Developer'}</h4>
          </div>
        </div>
        <div className='find-btns-swipe'>
          <CardButton btn='About' active={ active } changeView={ this.changeView } />
          <CardButton btn='Contact' active={ active } changeView={ this.changeView } />
        </div>
        <div className={`indicator active-${active}`} />
        { active === 'about' ?
          <div className='card-user-info-col'>
            <CardSkills skills={user.profile.skills} />
            <CardAbout text={user.profile.description} />
          </div> :
          <CardContact user={ user } onSubmit={ this.onSubmit }/>
        }
      </InfoBox>
    );
  }
};

class Find extends Component {
  constructor() {
    super();
    this.state = {
      filterOptions: [],
      loaded: false,
    }
  }

  getUsers = async () => {
    const res = await axios.get('/api/all_users');
    setTimeout(() => 
      this.setState({ 
        loaded: true,
        activeUsers: res.data 
      }), 2000);
  }
  
  updateResults = name => {
    const { filterOptions } = this.state;
    if (!filterOptions.includes(name)) {
      filterOptions.push(name)
    } else {
      let deleteIndex = filterOptions.indexOf(name);
      filterOptions.splice(deleteIndex, 1)
    }
    let updatedUsers = USERS.filter(user => 
      filterOptions.every(opt => user.skills.includes(opt))
    );
    this.setState({ activeUsers: filterOptions.length ? updatedUsers : USERS })
  }

  componentDidMount() {
   this.getUsers();
  }

  render() {
    const { activeUsers, loaded } = this.state;
    const { currentUser } = this.props;
    return (
      <div className='overview'>
        {/* <SearchBar updateResults={ this.updateResults } /> */}
        <div className='find-cards'>
          { !loaded ? <Spinner /> : 
            Object.values(activeUsers).map((user, i) => <Card user={user} i={i} currentUser={ currentUser } />) 
          }
        </div>
      </div> 
    );
  }
}

const mapStateToProps = state =>  {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)