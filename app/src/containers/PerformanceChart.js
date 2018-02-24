import { connect } from 'react-redux';
import { fetchFundPerformance } from '../actions';
import PerformanceChart from '../components/PerformanceChart';

const mapStateToProps = (state) => ({
    headerText: 'Performance Chart',
    dataLoaded: state.fundPerformanceDataLoaded,
    data: state.fundPerformanceData
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(fetchFundPerformance())
    }
});

const PerformanceChartContainer = connect(mapStateToProps, mapDispatchToProps)(PerformanceChart);

export default PerformanceChartContainer;