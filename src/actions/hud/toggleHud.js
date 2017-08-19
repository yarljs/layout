import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutToggleHud() {
  return {
    type: this.type,
  };
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      yarljs_layer_hud: {
        ...state.yarljs_layer_hud,
        toggled: !state.yarljs_layer_hud.toggled
      }
    };
  })
)(layoutToggleHud)
