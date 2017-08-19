import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel} from '../../libs';

function layoutRenameLayer(target, newName) {
  return {
    type: this.type,
    target,
    newName
  };
}

export default compose(
  Reducable((state, action) => {
    let i = layerByIndexOrLabel(state.yarljs_layers, action);

    return (i === -1)
    ? state
    : dotProp.set(state, `yarljs_layers.${i}.label`, action.newName);
  })
)(layoutRenameLayer)
