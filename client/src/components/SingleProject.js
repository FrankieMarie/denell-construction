import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getSingleProject } from '../redux/actions/projects';
import { getProjectImages } from '../redux/actions/images';

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxOpen: false,
    }
  }
  componentDidMount() {
    const { getSingleProject, getProjectImages, match } = this.props;
    getSingleProject(match.params.id);
    getProjectImages();
  }

  getImageStyles() {
    return {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '3rem'
    }
  }

  render() {
    const { project, images, history } = this.props;
    return (
      <div className="album">
        {
          !_.isEmpty(project) && (
            <div>
              <h1 className="album__title">{project.title}</h1>
            </div>
          )
        }
        <Link to="/projects">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        {
          _.isEmpty(images) && (
            <div>Loading...</div>
          )
        }
          {
            images &&
            !_.isEmpty(images) && (
              <div className="ablum__group" style={this.getImageStyles()}>
              {images.map(image => {
                return (
                  <div className="album__container" key={image._id}>
                    <img
                      className="album__img"
                      src={`${process.env.PUBLIC_URL}/${image.path}`}
                      alt=""
                    />
                  </div>
                )
              })}
            </div>
            )
          }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  const images = _.get(state, 'images.images', [])
  const filteredImgs = images.reduce((acc, image )=> {
    if(image.project === match.params.id) {
      acc.push(image);
      return acc;
    }
    return acc;
  }, []);
  return {
    project: _.get(state, 'projects.project', {}),
    images: filteredImgs,
  }
}

export default connect(mapStateToProps,
  {
    getSingleProject,
    getProjectImages,
  })(SingleProject);
