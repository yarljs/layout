import {Reducable} from '@yarljs/reducer';
import {compose} from 'react-redux';

function layoutNewLayer(name) {
  return {
    type: this.type,
    name
  };
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      yarljs_layers: [...res, action.name]
    };
  })
)(layoutNewLayer)
