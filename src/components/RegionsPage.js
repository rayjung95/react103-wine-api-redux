import React,{Component} from 'react'
import {Loader, Regions} from './index'
import * as WinesService from '../services/Wines';
import { connect } from 'react-redux'
import {fetchRegions} from '../actions/actions'


export class _RegionsPage extends Component {


    componentDidMount() {
        this.props.fetchRegions()
        console.log(this.props.loading)
    }

    onSelectRegion = (region) => {
        this.props.history.push({
            pathname: `/regions/${region}`
        });
    };

    render() {
        console.log("From RegionPage",this.props)
        if (this.props.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (
            <Regions
            onSelectRegion={this.onSelectRegion}
            regions={this.props.regions}
            />

        );
      }
  }



  function mapFromStoreToProps(store) {
    return {
      regions: store.regions,
      loading: store.loading === 'HTTP_LOADING',
    };
  }

  export const RegionsPage = connect(mapFromStoreToProps,{fetchRegions})(_RegionsPage);

