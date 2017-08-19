import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel} from '../../libs';

function layoutToggleLayerGrid(target) {
  return {
    type: this.type,
    target,
  };
}

export default compose(
  Reducable((state, action) => {
    let i = layerByIndexOrLabel(state.yarljs_layers, action);

    return (i === -1)
    ? state
    : dotProp.toggle(state, `yarljs_layers.${i}.grid.toggled`);
  })
)(layoutToggleLayerGrid)
