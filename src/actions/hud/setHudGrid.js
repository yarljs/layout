import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutSetHudGrid(placeholder, grid) {
  return {
    type: this.type,
    grid: {
      ...grid,
    }
  };
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      yarljs_layer_hud: {
        ...state.yarljs_layer_hud,
        grid: {
          ...state.yarljs_layer_hud.grid,
          rows: action.grid.rows,
          columns: action.grid.columns,
        }
      }
    };
  })
)(layoutSetHudGrid)
