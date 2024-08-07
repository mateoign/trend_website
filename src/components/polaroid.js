import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import '../styles/polaroid.scss';

class Polaroid extends React.Component {
  render() {
    return(
      <div className="polaroid-container">
        <div className="polaroid-frame">
            <h6 className="polaroid-position">
              {this.props.position}
            </h6>
          <div className="image-frame">
            <LazyLoadImage className="polaroid-image" src={this.props.picture} alt={this.props.name} />
          </div>
          <div className="polaroid-info">
            <h5>
              {this.props.name}
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Polaroid;