import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import api from "../../service/api";
import "../Chart/style.css";



class Chart extends Component{
    constructor(){
        super();
        this.state = {

            Chart:  {},
            sales: {},
            dados: [], 
            labels: []

        }
    }
    
    async componentDidMount(){
        const response = await api.get('sales');
        
        this.setState({sales: response.data});
        

        
        let data =  []
        
        let resp = response.data;
        
        resp.forEach(sale =>{
            data.push({
                labels: sale.month,
                datasets: {data: sale.sales}
            })
        });

            
        let sales = Object.assign({}, data)
        
        this.setState({sales: sales});

        sales = this.state.sales;

        let dados =  [];
        let i = 0;
        resp.forEach(dado =>{
                dados.push([
                    dados[i] = dado.sales,
                ]) 
                i++;
            });
        const d = dados.pop()
        this.setState({dados: dados});


        
        
        let labels =  [];
        let j = 0;
        data.forEach(label =>{
                labels.push([
                    labels[j] = label.labels,
                ])
                j++;
        })

        const l = labels.pop()
        this.setState({labels: labels});
        
        
        console.log("labels: ", labels);
        console.log("sales: ", sales);
        console.log("dados: ", dados); 

        } 
        
        render(){

                    
            let dados = this.state.dados;
            let labels = this.state.labels;
            let data =  {
                labels: labels,
                datasets: [
                    {
                        label: 'Sales',
                        backgroundColor: '#4c84ff',
                        borderColor: '#4c84ff',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: dados
                    }
                ]
                };
            return (
            <div className="chart bg-chart">
            <h2>Site Traffic Overview</h2> 
            <Bar
                data={data}
                height={238}
                options={{
                maintainAspectRatio: false
                }}
            />
            </div>
            )
        }
    }

export default Chart;

