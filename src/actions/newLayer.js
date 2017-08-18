import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutNewLayer(name) {
  return {
    type: this.type,
    payload: {
      label: name,
      panes: [

      ]
    }
  };
}

export default compose(
  Reducable((state, action) => {
    return {
      ...state,
      yarljs_layers: [...state.yarljs_layers, action.payload]
    };
  })
)(layoutNewLayer)
