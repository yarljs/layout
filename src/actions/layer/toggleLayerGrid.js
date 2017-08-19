import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutToggleLayerGrid(target) {
  return {
    type: this.type,
    target,
  };
}

export default compose(
  Reducable((state, action) => {
    let res;
    if(typeof action.target === "string")
    {
      res = state.yarljs_layers.map((e, i) => {
        return (e.label === action.target) ? {...e, grid: {...e.grid, toggled: !e.grid.toggled} : e;
      });
    }
    else if(typeof action.target === "number")
    {
      res = state.yarljs_layers.map((e, i) => {
        return (i === action.target) ? {...e, grid: {...e.grid, toggled: !e.grid.toggled} : e;
      });
    }

    return {
      ...state,
      yarljs_layers: res
    };
  })
)(layoutToggleLayerGrid)
