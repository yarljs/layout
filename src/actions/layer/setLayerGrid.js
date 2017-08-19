import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel} from '../../libs';

function layoutSetLayerGrid(target, grid) {
  return {
    type: this.type,
    target,
    grid
  };
}

export default compose(
  Reducable((state, action) => {
    let i = layerByIndexOrLabel(state.yarljs_layers, action);

    return (i === -1)
    ? state
    : dotProp.merge(state, `yarljs_layers.${i}.grid`, action.grid);
  })
)(layoutSetLayerGrid)
