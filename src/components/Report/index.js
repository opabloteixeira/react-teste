import React, { Component } from 'react';
import api from '../../service/api';


export default class Report extends Component {


    render() {
        const {report} = this.props;

        return (

            <article  key={report.id} className="message-item">
            <div className="wrap-message-itens">
                <figure className="image left">
                    <img className="image-item" src={report.image} alt={report.user}></img>
                </figure>

                <h2 className="title-item"> {report.user}
                    
                </h2>

                <p className="text-item">{report.message}
                <br/>
                    <span className="message-time">{report.time}</span> 
                </p>
                </div>   
            </article>
        );

    }
}
