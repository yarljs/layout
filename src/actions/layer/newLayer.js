import {Reducable} from '@yarljs/reduce';
import {compose} from 'redux';
import dotProp from 'dot-prop-immutable';


function layoutNewLayer(name) {
  return {
    type: this.type,
    layer: {
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
    return dotProp.set(state, 'yarljs_layers', (e) => {e.push(action.layer)})
  })
)(layoutNewLayer)
