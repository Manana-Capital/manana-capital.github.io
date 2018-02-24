import { connect } from 'react-redux';
import Text from '../components/Text';

const mapStateToProps = (state) => ({
    text: state.text,
    textIsVisible: state.textIsVisible
});

const VisibleText = connect(mapStateToProps)(Text);

export default VisibleText;