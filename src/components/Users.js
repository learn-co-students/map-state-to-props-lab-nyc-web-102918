import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.count} Users!
          {
            this.props.users.map(user => {
              return <li key={user.username}> {user.username} from {user.hometown} </li>
            })
          }
        </ul>
      </div>
    )
  }
};

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    count: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
