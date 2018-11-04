import * as React from 'react';
import { Component } from 'react';
import { Query } from 'react-apollo';
import getAllUsers from './query';
import { Spinner } from '../../../assets/spinners';
import { ALL_USERS } from '../../../fake_backend/users';
import Card from './Card';
import { User } from './types';

interface Props {
  currentUser?: User
}

interface State {
  filterOptions: any[] | any
  loaded: boolean
  activeUsers: any
}

class Find extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: [],
      activeUsers: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    setTimeout(
      () =>
        this.setState({
          loaded: true,
          activeUsers: ALL_USERS,
        }),
      2000
    );
  };

  updateResults = (name: string) => {
    const { filterOptions, activeUsers } = this.state;
    if (!filterOptions.includes(name)) {
      filterOptions.push(name);
    } else {
      const deleteIndex = filterOptions.indexOf(name);
      filterOptions.splice(deleteIndex, 1);
    }
    const updatedUsers = (activeUsers as User[]).filter((user: User) =>
      filterOptions.every((opt: any) => user.profile.skills.includes(opt))
    ) 
    this.setState({
      activeUsers: filterOptions.length ? updatedUsers : activeUsers,
    });
  };

  render() {
    const {  loaded } = this.state;
    const { currentUser } = this.props;
    return (
      <Query query={getAllUsers}>
        {({data}) => (
          <div className="overview">
            {/* <SearchBar updateResults={ this.updateResults } /> */}
            <div className="find-cards">
              {!loaded ? (
                <Spinner />
              ) : (
                data.users.map(
                  // eslint-disable-next-line comma-dangle
                  (user, i) => <Card user={user} i={i} currentUser={currentUser} />
                )
              )}
            </div>
          </div>
        )}
      </Query>
    );
  }
}

export default Find;
