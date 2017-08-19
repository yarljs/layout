import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutToggleHudGrid(target) {
  return {
    type: this.type,
    target,
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
          toggled: !yarljs_layer_hud.grid.toggled
        }
      }
    };
  })
)(layoutToggleHudGrid)
