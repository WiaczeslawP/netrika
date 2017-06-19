import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {renameItem, toggleItem} from 'actions';
import EditItem from 'components/EditItem';

const mapStateToProps = (state, {item, index}) => ({
	item,
	index,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	renameItem,
	toggleItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
