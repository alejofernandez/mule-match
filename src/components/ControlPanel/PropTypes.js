import { PropTypes } from 'react';

// For a more detailed list of PropTypes
// see http://ricostacruz.com/cheatsheets/react.html#property-validation

const propTypes = {
  currentProduct: PropTypes.object,
  selectProduct:  PropTypes.func.isRequired,
  ignoreProduct:  PropTypes.func.isRequired
};

export default propTypes;
