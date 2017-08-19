import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import {layerByIndexOrLabel} from '../../libs';

function layoutLayerToTop(target, newIndex) {
  return {
    type: this.type,
    target,
    newIndex
  };
}

export default compose(
  Reducable((state, action) => {
    let i = layerByIndexOrLabel(state.yarljs_layers, action);
    if(i === -1) return state;

    let t = state.yarljs_layers[i];
    let res = dotProp.delete(state, `yarljs_layers.${i}`);

    return dotProp.set(state, 'yarljs_layers', (e) => {e.push(t)});
  })
)(layoutLayerToTop)
