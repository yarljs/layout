import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutRenameLayer(target, newName) {
  return {
    type: this.type,
    target,
    newName
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
      res = state.yarljs_layers.map((e, i) => {
        return (i === action.target) ? {...e, label: action.newName} : e;
      });
    }

    return {
      ...state,
      yarljs_layers: res
    };
  })
)(layoutRenameLayer)
