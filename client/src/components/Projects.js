import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../redux/actions/projects';

class Projects extends Component {
  componentDidMount() {
    const { getAllProjects } = this.props;
    getAllProjects();
  }

  render() {
    const { projects, history } = this.props;
    return (
      <div className="project">
        <div className="row project__heading">
          <Link to="/">
            <div className="col-1-of-3 project__logo" />
          </Link>
          <h1
            className="col-1-of-3 project__heading--main">
            Our <span className="project__heading--sub">Projects</span>
          </h1>
        </div>
        <div className="row">
        {
          _.isEmpty(projects) && (
            <h2>Loading photo albums...</h2>
          )
        }
        {
          !_.isEmpty(projects) && (
            projects.map(project => {
              return (
              <div className="col-1-of-4 project__album" key={project._id}>
                <div>
                  <Link className="project__title" to={`/project/${project._id}`}>
                    {project.title}
                  </Link>
                </div>
                <img
                  className="project__thumbnail"
                  src={`${process.env.PUBLIC_URL}/${project.defaultImage}`}
                  alt="deafultImage"
                  onClick={() => history.push(`/project/${project._id}`)}
                />
                {/* <button>Delete</button> */}
              </div>
              )
            })
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: _.get(state, 'projects.projects', {})
  }
}

export default connect(mapStateToProps, {
  getAllProjects,
})(Projects);
