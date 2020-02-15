import { connect } from 'react-redux'
import React from 'react'
import {addUser} from '../reducer/actions'
import model from '../model';

const mapStateToProps = (state, ownProps) => ({
  testData: state.testData
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => dispatch(addUser('Jiangwei from App1 which is internal store'))
})

const User = ({testData,onAdd}) => {
    console.log('Store get in anther place',model.getStore())

    let users = testData.map((u,i) => <li key={i}>User : {u}</li>);
    return <div>{users}
    <button onClick={onAdd}>Add User</button>
    </div>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
