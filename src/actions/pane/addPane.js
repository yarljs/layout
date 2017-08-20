import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';

import {layerByIndexOrLabel} from '../../libs';


function layoutAddPane(layer, label) {
  return {
    type: this.type,
    layer: layer,
    pane: {
      label,
      grid: {
        fromRow: 1,
        toRow: 2,
        fromColumn: 1,
        toColumn: 2
      }
    }
  };
}

export default compose(
  Reducable((state, action) => {
    let index = layerByIndexOrLabel(state.yarljs_layers, action);
    return dotProp.set(
      state,
      `yarljs_layers.${index}.panes`,
      [...dotProp.get(state, `yarljs_layers.${index}.panes`), action.pane]
    );
  })
)(layoutAddPane)
