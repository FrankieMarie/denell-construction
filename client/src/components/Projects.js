import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      lightboxOpen: false,
    }
  }
  render() {
  const { images } = this.props;
  const { photoIndex, lightboxOpen } = this.state;
  console.log('images', images);
    return (
      <div className="projects">
        <div className="row projects__heading">
          <div className="projects__logo-container">
            <Link to="/">
              <div className="projects__logo" />
            </Link>
          </div>
          <h1
            className="projects__header projects__header--main">
            Our <span className="projects__header projects__header--sub">Projects</span>
          </h1>
        </div>
        <div className="row images">
          { images.map((image, index) => {
              return (
              <div className="image-container" key={image.id}>
                <img
                  className="image-container__jpg"
                  src={require(`../assets/gallery${image.path}`)}
                  alt=""
                  onClick={() => this.setState({ photoIndex: index, lightboxOpen: true })}
                />
              </div>
              )
            })
          }
        </div>
        {lightboxOpen && (
          <Lightbox
            mainSrc={require(`../assets/gallery${images[photoIndex].path}`)}
            nextSrc={require(`../assets/gallery${images[(photoIndex + 1) % images.length].path}`)}
            prevSrc={require(`../assets/gallery${images[(photoIndex + images.length - 1) % images.length].path}`)}
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
    );
  }
}

export default Projects;
