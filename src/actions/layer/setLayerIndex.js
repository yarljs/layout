import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel} from '../../libs';

function layoutSetLayerIndex(layer, newIndex) {
  return {
    type: this.type,
    layer,
    newIndex
  };
}

export default compose(
  Reducable((state, action) => {
    let i = layerByIndexOrLabel(state.yarljs_layers, action);

    if (i === -1)
    {
      return state;
    }

    let arr = dotProp.get(state, `yarljs_layers`);
    let t = arr.splice(i, 1);
    dotProp.set(state, `yarljs_layers`,[
      ...array.slice(0, action.newIndex),
      t,
      ...array.slice(action.newIndex)
    ]);

  })
)(layoutSetLayerIndex)
