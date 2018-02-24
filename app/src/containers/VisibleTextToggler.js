import { connect } from 'react-redux';
import { toggleTextVisibility } from '../actions';
import TextToggler from '../components/TextToggler';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(toggleTextVisibility())
    }
});

const TextTogglerCont = connect(null, mapDispatchToProps)(TextToggler);

export default TextTogglerCont;