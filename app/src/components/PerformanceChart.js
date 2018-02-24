import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { LineChart, Line, YAxis, CartesianGrid, Tooltip } from 'recharts';

const formatYAxis = (val) => {
    // eslint-disable-next-line
    return `\$${val}`;
}

class PerformanceChart extends React.Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        let spinner;

        if (!this.props.dataLoaded) {
            spinner = (
                <div className="performanceChart__spin">
                    <Spin />
                </div>
            );
        }

        let chart;
        if (this.props.dataLoaded) {
            chart = (
                <LineChart className="performanceChart__data" width={460} height={288} data={this.props.data.reverse()}>
                    {/* <XAxis tickFormatter={ formatXAxis } dataKey="gathered"/> */}
                    <YAxis tickFormatter={ formatYAxis } />
                    <CartesianGrid stroke='#e8e8e8'/>
                    <Tooltip/>
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            );
        }

        return (
            <div className="performanceChart">
                { spinner }
                { chart }
            </div>
        );
    }
}

PerformanceChart.propTypes = {
    headerText: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
    dataLoaded: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
}

export default PerformanceChart;