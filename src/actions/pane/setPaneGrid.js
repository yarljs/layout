import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel, paneByIndexOrTarget} from '../../libs';


function layoutSetPaneGrid(layer, pane, grid) {
  return {
    type: this.type,
    layer,
    pane,
    grid
  };
}

export default compose(
  Reducable((state, action) => {
    let layerIndex = layerByIndexOrLabel(state.yarljs_layers, action);
    if(layerIndex === -1) return state;

    let paneIndex = paneByIndexOrTarget(state.yarljs_layers[layerIndex].panes, action);
    if(paneIndex === -1) return state;

    return dotProp.merge(
      state,
      `yarljs_layers.${layerIndex}.panes.${paneIndex}.grid`,
      action.grid
    );
  })
)(layoutSetPaneGrid)
