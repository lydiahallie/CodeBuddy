import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../../../assets/spinners';
import { ALL_USERS } from '../../../fake_backend/users';
import Card from './Card';

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
//           {
//             opt.lang.slice(0, 3).map(x => <FilterBox name={x} updateResults={ updateResults } />)
//           }
//         </div>
//       ))}
//     </div>
//   </div>
// );

class Find extends Component {
  constructor() {
    super();
    this.state = {
      filterOptions: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    setTimeout(() => this.setState({
      loaded: true,
      activeUsers: ALL_USERS,
    }), 2000);
  }

  updateResults = (name) => {
    const { filterOptions, activeUsers } = this.state;
    if (!filterOptions.includes(name)) {
      filterOptions.push(name);
    } else {
      const deleteIndex = filterOptions.indexOf(name);
      filterOptions.splice(deleteIndex, 1);
    }
    const updatedUsers = activeUsers.filter(
      user => filterOptions.every(opt => user.skills.includes(opt)),
    );
    this.setState({ activeUsers: filterOptions.length ? updatedUsers : activeUsers });
  }

  render() {
    const { activeUsers, loaded } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="overview">
        {/* <SearchBar updateResults={ this.updateResults } /> */}
        <div className="find-cards">
          {!loaded ? <Spinner />
            : Object.values(activeUsers).map(
              // eslint-disable-next-line comma-dangle
              (user, i) => <Card user={user} i={i} currentUser={currentUser} />
            )
          }
        </div>
      </div>
    );
  }
}

Find.propTypes = {
  currentUser: PropTypes.shape({
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
};

export default Find;
