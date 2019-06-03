import React, { Component } from 'react';
import api from '../../service/api';
import "./style.css";


class Information extends Component {

    constructor(props){
        super(props);
    }


    state = {
        information: []
    };


    async componentDidMount(){

        const response = await api.get('information');
        this.setState({information: response.data});

    }


    render() {

        
        return (
            <React.Fragment>

                <div className={`item item-green`}>
                    <div className="left">
                        <i className={`fa fa-4x fa-eye`}></i>
                    </div>
                    <div className="right">
                        <span className="item-number">{this.state.information.visitors}</span>
                        <small className="item-title">Visitors</small>
                    </div>
                </div> 

                <div className={`item item-yellow`}>
                    <div className="left">
                        <i className={`fa fa-4x fa-users`}></i>
                    </div>
                    <div className="right">
                        <span className="item-number">{this.state.information.users}</span>
                        <small className="item-title">Users</small>
                    </div>
                </div> 

                <div className={`item item-blue`}>
                    <div className="left">
                        <i className={`fa fa-4x fa-dollar`}></i>
                    </div>
                    <div className="right">
                        <span className="item-number">{this.state.information.sales}</span>
                        <small className="item-title">Sales</small>
                    </div>
                </div> 

                <div className={`item item-purple`}>
                    <div className="left">
                        <i className={`fa fa-4x fa-shopping-cart`}></i>
                    </div>
                    <div className="right">
                        <span className="item-number">{this.state.information.orders}</span>
                        <small className="item-title">Orders</small>
                    </div>
                </div> 

            </React.Fragment>
        );
    }

}


export default Information;


