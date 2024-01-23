import React, { Component } from 'react'

// import {Link} from 'react-router-dom'

export default class Newsitem extends Component {
  
  render() {
    // console.log(this.props.title)
    // console.log(this.props.discription)
    return (
      <div>
        {/* News item is here  */}
        <div className="card" >
            <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <p className='card-text'><small className='text-muted'>By {this.props.author==null?'unknown':this.props.author} on {this.props.data.slice(0,10)}</small></p>
                <a href={this.props.newsUrl} target={"_blank"} className="btn btn-dark">Read More</a>
            </div>
        </div>
        
      </div>
    )
  }
}
