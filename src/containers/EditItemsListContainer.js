import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from 'actions';
import EditItemsList from 'components/EditItemsList';

const mapStateToProps = (state) => ({
	items: state.reducer.items,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	addItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditItemsList);
