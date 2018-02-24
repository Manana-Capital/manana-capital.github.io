import { connect } from 'react-redux';
import { updateSubscribeEmail } from '../actions';
import SubscribeEmail from '../components/SubscribeEmailForm';

const mapStateToProps = (state) => {
    return {
        value: state.subscribeEmail.value
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        // dispatch(fetchFundPerformance())
    },
    onChange: (e) => {
        dispatch(updateSubscribeEmail(e.target.value));
    }
});

const SubscribeEmailContainer = connect(mapStateToProps, mapDispatchToProps)(SubscribeEmail);

export default SubscribeEmailContainer;