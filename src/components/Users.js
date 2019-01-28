import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // console.log(this.props.users, this.props.userCount)
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return (
              <div key={user.username} >
                <li>{user.username}, {user.hometown}</li>
              </div>
            )}
          )}
        </ul>
        User count: {<p>{this.props.userCount}</p>}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
