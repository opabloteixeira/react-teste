import React, {Component} from "react";
import api from "../../service/api";
import "../Reports/style.css";
import Report from "../../components/Report";


export default class Reports extends Component{

    state = {
        reports: [],
        newReport: ''
    }
    

    async componentDidMount(){
        const response = await api.get('reports');
        this.setState({reports: response.data}) 
    }



    handleNewReport = async (e, btn) => {
        
        if (e.keyCode === 13 || btn === true) { 
        
        const message = this.state.newReport; 
        const user = "NAVER";  
        const image = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";  
        const time = "2 mins ago";  

        await api.post('reports', {message, user, image, time});
        
        const response = await api.get('reports');
        
        this.setState({reports: response.data}) 
        
        this.setState({newReport: ''});

        }else{ 
            return; 
        }
    }


    handleInputChange = e =>{
        this.setState({newReport: e.target.value});
    }


    render(){

        return(
            <section className="messages">


            <header className="chat-header">
                <div className="wrap-icon-message">
                    <span className="message-title">Reports</span>              
                </div> 
            </header>


            <section className="message-list">
                    { this.state.reports.map(report => (
                        <Report key={report.id}  report={report}/>
                    ))} 
            </section>

            <div className="box-input-text">
                <div className="wrap-text">
                        <input 
                        placeholder="Type your message here..." 
                        name="message" 
                        className="input-messages" 
                        type="text"
                        value={this.state.newReport}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewReport}
                        ></input>

                        <button 
                        className="input-button" 
                        type="button"
                        onClick={(e) => this.handleNewReport(e,true)}
                        >Send</button>
                </div> 

            </div> 


            </section>

        )
    }

}