import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';

function layoutNewLayer(name) {
  return {
    type: this.type,
    payload: {
      label: name,
      grid: {
        rows: 1,
        columns: 1,
        toggled: false
      },
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
