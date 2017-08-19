import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutSetLayerGrid(target, grid) {
  return {
    type: this.type,
    target,
    grid: {
      ...grid,
      toggled: false
    }
  };
}

export default compose(
  Reducable((state, action) => {
    let res;
    if(typeof action.target === "string")
    {
      res = state.yarljs_layers.map((e, i) => {
        return (e.label === action.target) ? {...e, grid: action.grid} : e;
      });
    }
    else if(typeof action.target === "number")
    {
      res = state.yarljs_layers.map((e, i) => {
        return (i === action.target) ? {...e, grid: action.grid} : e;
      });
    }

    return {
      ...state,
      yarljs_layers: res
    };
  })
)(layoutSetLayerGrid)
