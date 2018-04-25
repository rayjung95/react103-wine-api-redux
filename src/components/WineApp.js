import React, { Component } from 'react';
import { RegionsPage, Header} from '.';


export class WineApp extends Component {
  render() {
    console.log("From WineApp",this.props)
    return (
      <div className="container">

        <Header
        {...this.props}
        />

        <div className="row">
          <RegionsPage
          {...this.props}
          />
        </div>
      </div>
    );
  }
}