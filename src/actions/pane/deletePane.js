import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel, paneByIndexOrTarget} from '../../libs';


function layoutDeletePane(layer, pane) {
  return {
    type: this.type,
    layer,
    pane
  };
}

export default compose(
  Reducable((state, action) => {
    let layerIndex = layerByIndexOrLabel(state.yarljs_layers, action);
    if(layerIndex === -1) { return state;}
    let pane = paneByIndexOrTarget(state.yarljs_layers[layerIndex].panes, action);

    return dotProp.delete(
      state,
      `yarljs_layers.${layer}.panes.${pane}`
    );
  })
)(layoutDeletePane)
