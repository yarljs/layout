import {Reducable} from '@yarljs/reducer';
import {compose} from 'react-redux';

function layoutSetLayerIndex(target, newIndex) {
  return {
    type: this.type,
    target,
    newIndex
  };
}

export default compose(
  Reducable((state, action) => {
    let res;
    if(typeof action.target === "string")
    {
      res = state.yarljs_layers.map((e, i) => {
        return (e.label === action.target) ? {...e, label: action.newName} : e;
      });
    }
    else if(typeof action.target === "number")
    {
      res = action.yarljs_layers.map((e, i) => {
        return (i === action.target) ? {...e, label: action.newName} : e;
      });
    }

    return {
      ...state,
      yarljs_layers: res
    };
  })
)(layoutSetLayerIndex)
