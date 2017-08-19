import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

import {layerByNameOrIndex} from '../../libs';

function layoutNewLayer(target) {
  return {
    type: this.type,
    target
  };
}

export default compose(
  Reducable((state, action) => {
    let res = layerByNameOrIndex(state, action);
    if(!res)
    {
      return state;
    }
    return {
      ...state,
      yarljs_layers: res
    };
  })
)(layoutNewLayer)
