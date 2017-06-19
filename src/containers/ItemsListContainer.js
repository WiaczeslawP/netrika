import {connect} from 'react-redux';
import ItemsList from 'components/ItemsList';

const mapStateToProps = (state) => ({
	items: state.reducer.items.filter(item => !item.is_removed),
});

export default connect(mapStateToProps)(ItemsList);
