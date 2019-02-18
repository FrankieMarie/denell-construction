import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProjectForm from '../components/forms/AddProject';
import { addProject } from '../redux/actions/projects';

class AddProjectContainer extends Component {

  newProjectSubmit(payload) {
    const { addProject } = this.props;
    addProject(payload);
  }

  render() {
    return (
      <div>
        <AddProjectForm onSubmit={this.newProjectSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addProject
  }
}

export default connect(mapStateToProps, { addProject })(AddProjectContainer);
