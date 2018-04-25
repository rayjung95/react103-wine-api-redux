import React,{Component} from 'react'
import {Loader, Wine, Header} from '.'
import * as WinesService from '../services/Wines';
import { fetchWine } from '../actions/actions'
import { connect } from 'react-redux'

class _WinePage extends Component {

    componentDidMount() {
        this.props.fetchWine(this.props.match.params.wineId)
    }

    render() {
        console.log(this.props)
        if (this.props.loading === 'HTTP_LOADING') {
            return <div className="center-align"><Loader /></div>
          }
      return (
            <div className="container">

                <Header
                {...this.props}
                />

                <div className="row">
                <Wine
                wine={this.props.wine}
                />
                </div>
            </div>
        
      );
    }
  }

  export const mapFromStoreToProps = (store) => {
    return {
        wine: store.wine,
        loading: store.loading === 'HTTP_LOADING'
    }
  }

  export const WinePage = connect(mapFromStoreToProps,{fetchWine})(_WinePage)