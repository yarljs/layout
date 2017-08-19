import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutLayerToTop(target, newIndex) {
  return {
    type: this.type,
    target,
    newIndex
  };
}

export default compose(
  Reducable((state, action) => {
    let index = -1;
    if(typeof action.target === "string")
    {
      index = state.yarljs_layers.map((e, i) => {
        return (e.label === action.target) ? i : e;
      }, -1);
    }
    else if(typeof action.target === "number")
    {
      index = action.target
    }
    if( index < 0 || index > state.yarljs_layers.length)
    {
      return state;
    }
    let res = state.yarljs_layers.slice();
    let i = res.splice(index, 1)[0];
    return {
      ...state,
      yarljs_layers: [...res, i]
    };
  })
)(layoutLayerToTop)
