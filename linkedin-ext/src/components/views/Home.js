import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/actions.js'

import NavBar from './NavBar/NavBar.js'



class Home extends Component {
  state = {
    users: {
      first_name: '',
      last_name: ''
    }
  }

  componentWillMount() {
    this.props.getUser();
  }

  render() {

   return (
     <div>
       <NavBar />
        {/* {this.props.users.map(user => ( */}
          {/* <h4>{user.first_name}</h4> */}
        {/* ))} */}
     </div>
   );
  }
}

const mapStateToProps = state => {
  console.log('state', state.userReducer)
  return {
    getUser: state.userReducer.getUser,
    users: state.userReducer.users
  }
}

export default connect(mapStateToProps, {getUser})(Home)