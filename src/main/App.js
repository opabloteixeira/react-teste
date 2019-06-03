import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Information from "../components/Information";
import Chart from '../components/Chart';
import Reports from '../components/Reports';


export default props => (
        
            <React.Fragment>
                <div className="center">
                    <h1 className="title-top">Page Overview</h1>
                    <section className="information-wrap">
                        <Information />
                    </section>

                    <section className="chart-report-wrap">
                        <Chart />
                        <Reports />
                    </section>
                </div>  
            </React.Fragment>
    
)
