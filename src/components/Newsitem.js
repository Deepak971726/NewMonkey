import React, { Component } from "react";

// import {Link} from 'react-router-dom'

export default class Newsitem extends Component {
  render() {
    // console.log(this.props.title)
    // console.log(this.props.discription)
    return (
      <div>
        {/* News item is here  */}

        {/* <span class="badge bg-danger">{this.props.source}</span> */}
        <div className="card">
          {/* <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light">
            <span className="">{this.props.source}</span>
        </span> */}
          {/* <div className='container'><span class="badge bg-danger">{this.props.source}</span></div> */}
          <img src={this.props.imageUrl} className="card-img-top" alt="..." />
          {/* <span className="badge bg-danger">{this.props.source}</span> */}
          <span style={{zIndex:"3", transform:"translate(-97%,-29%)"}} className="position-absolute top-0 start-100 badge rounded-pill bg-danger">
            {this.props.source}
          </span>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {this.props.author == null ? "unknown" : this.props.author}{" "}
                on {new Date(this.props.data).toGMTString()}
              </small>
            </p>
            <a
              href={this.props.newsUrl}
              target={"_blank"}
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// just added comment for checking
