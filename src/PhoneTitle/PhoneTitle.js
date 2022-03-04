import React from "react";
import './PhoneTitle.css';


class PhoneTitle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {console.log('state', this.state)}
          <div className="descBody">
            <div className="card-header">
              {this.props.title}
              <img id="phoneRating" src={this.props.rating} alt="Rating Image" />
            </div>
            <p id="phoneDesc">
              <span className="headings">Storage: </span>
              {this.props.desc}
            </p>
            <p id="phonePrice">
              <span className="headings">Price: </span>
              {this.props.price}
            </p>
            <p id="phoneShipping">
              <span className="headings">Shipping: </span>
              {this.props.shipping}
            </p>
          </div>
      </>
    )
  }
};

export default PhoneTitle;