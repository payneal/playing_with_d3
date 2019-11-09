import React, {Component } from 'react';
import './App.css';
import {select, arc} from "d3";


//https://www.youtube.com/watch?v=_8V5o2UHG0E
// 3:04


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.drawSomething = this.drawSomething.bind(this);
    }

    componentDidMount() {
        this.drawSomething()
    }

    drawSomething() {
        /* eslint-disable no-unused-vars */
        const svg = select('svg');
        svg.style("background-color", "red");
    
        const height = svg.attr("height")
        const width = svg.attr("width")

        const g = svg.append('g')
            .attr("transform", `translate(${width/2},  ${height/2})`)

        const circle = g.append('circle')
            .attr('r', height/2)
            .attr('fill', "yellow")
            .attr("stroke", "black")
        
   
        let eye_spacing = 100;
        let eye_y_offset = -70;
        let eye_radius = 30 

        const left_eye = g.append('circle')
            .attr('r', eye_radius)
            .attr('cx', - eye_spacing)
            .attr("cy", + eye_y_offset)
            .attr('fill', "black")
      
        const right_eye = g.append('circle')
            .attr('r', eye_radius)
            .attr('cx', + eye_spacing)
            .attr("cy", + eye_y_offset)
            .attr('fill', "black")

        const mouth = g.append("path")
            .attr("d", arc()({
                innerRadius: 150,
                outerRadius: 170,
                startAngle: Math.PI/2,
                endAngle: Math.PI * 3/2
            }))
        /* eslint-enable no-unused-vars */    

    }
    
    render() { 
        return (
            <div className="App">
                <svg width={960} height={500}>
                </svg>
          </div>
        );
    }
}

export default App;
