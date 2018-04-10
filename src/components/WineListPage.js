import React,{Component} from 'react'
import {Loader, WineList, Header} from '.'
import * as WinesService from '../services/Wines';

export class WineListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            wines: [],
          }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            WinesService.fetchWinesFrom(this.props.match.params.regionId).then(wines => {
                this.setState({
                loading: false,
                wines,
                });
            });
        });
    }

    onSelectWine = (wine) => {
        console.log(this.props)
        console.log(this.props.match.params.regionId)
        this.props.history.push({
            pathname: `/regions/${this.props.match.params.regionId}/wines/${wine}`
        });
        
    };

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
                <WineList
                onSelectWine={this.onSelectWine}
                wines={this.state.wines}
                />
                </div>
            </div>
            
        );
    }
  }