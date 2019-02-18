import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { getSingleProject } from '../redux/actions/projects';
import { getProjectImages } from '../redux/actions/images';

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
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
      display: 'flex',
      justifyContent: 'space-between',
    }
  }

  render() {
    const { project, images } = this.props;
    const { photoIndex, lightboxOpen } = this.state;
    return (
      <div className="album">
        {
          !_.isEmpty(project) && (
            <div>
              <h1 className="album__title">{project.title}</h1>
            </div>
          )
        }
        <Link className="btn btn-orange" to="/projects">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        {
          _.isEmpty(images) && (
            <h2 className="loading">Loading Images...</h2>
          )
        }
        <div className="album__group">
          {
            images &&
            !_.isEmpty(images) && (
              images.map((image, index) => {
                return (
                  <div className="album__container" key={image._id}>
                    <img
                      className="album__img"
                      src={`${process.env.PUBLIC_URL}/${image.path}`}
                      alt=""
                      onClick={() => this.setState({ photoIndex: index, lightboxOpen: true })}
                    />
                  </div>
                )
              })
            )
          }
        </div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={`${process.env.PUBLIC_URL}/${images[photoIndex].path}`}
            nextSrc={`${process.env.PUBLIC_URL}/${images[(photoIndex + 1) % images.length].path}`}
            prevSrc={`${process.env.PUBLIC_URL}/${images[(photoIndex + images.length - 1) % images.length].path}`}
            onCloseRequest={() => this.setState({ lightboxOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
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
