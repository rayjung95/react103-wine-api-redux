import React,{Component} from 'react'
import {Loader, Wine, Header} from '.'
import * as WinesService from '../services/Wines';


export class WinePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            wine: null,
          }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            WinesService.fetchWine(this.props.match.params.wineId).then(wine => {
                this.setState({
                loading: false,
                wine,
                });
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <div className="center-align"><Loader /></div>
          }
      return (
            <div className="container">

                <Header
                {...this.props}
                />

                <div className="row">
                <Wine
                wine={this.state.wine}
                />
                </div>
            </div>
        
      );
    }
  }