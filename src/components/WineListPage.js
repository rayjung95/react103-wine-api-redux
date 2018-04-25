import React,{Component} from 'react'
import {Loader, WineList, Header} from '.'
import * as WinesService from '../services/Wines';
import { fetchWineList } from '../actions/actions'
import { connect } from 'react-redux'


class _WineListPage extends Component {


    componentDidMount() {
        this.props.fetchWineList(this.props.match.params.regionId)
    }

    onSelectWine = (wine) => {
        this.props.history.push({
            pathname: `/regions/${this.props.match.params.regionId}/wines/${wine}`
        });
    };

    render() {
        if (this.props.loading==='HTTP_LOADING') {
            return <div className="center-align"><Loader /></div>
          }
        return (

            <div className="container">

                <Header
                {...this.props}
                />

                <div className="row">
                <WineList
                onSelectWine={this.onSelectWine}
                wines={this.props.wineList}
                />
                </div>
            </div>
            
        );
    }
  }

  function mapFromStoreToProps(store) {
    return {
      wineList: store.wineList,
      loading: store.loading === 'HTTP_LOADING',
    };
  }

  export const WineListPage = connect(mapFromStoreToProps,{fetchWineList})(_WineListPage);