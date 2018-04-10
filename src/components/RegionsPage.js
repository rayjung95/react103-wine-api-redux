import React,{Component} from 'react'
import {Loader, Regions} from './index'
import * as WinesService from '../services/Wines';

export class RegionsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            regions: [],
          }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            WinesService.fetchRegions().then(regions => {
                this.setState({
                loading: false,
                regions,
                });
            });
        });
    }

    onSelectRegion = (region) => {
        console.log("ha")
        console.log(this.props)
        this.props.history.push({
            pathname: `/regions/${region}`
        });
    };

    render() {
        if (this.state.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (

            <Regions
            onSelectRegion={this.onSelectRegion}
            regions={this.state.regions}
            />

        );
      }
  }

