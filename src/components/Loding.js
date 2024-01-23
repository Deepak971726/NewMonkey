import React, { Component } from 'react'
import giphy from './Spinner-1.2s-135px (2).gif'

export default class Loding extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={giphy} alt='loading'/>
      </div>
    )
  }
}
