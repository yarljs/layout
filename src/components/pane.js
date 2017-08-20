import React from 'react';
import {connect} from 'react-redux';
import {HotKeys} from 'react-hotkeys';

import {randomColor} from '../libs';

const st = (e)=>{e.preventDefault(); return false;}

const tG = (toggle, fn) => {
  return (e) => {
    if(toggle) {fn(e);  st(e);}
  }
}

class Pane extends React.Component {
  constructor(props) {
    super(props);
    this.getGrid = this.getGrid.bind(this);
    this.getBody = this.getBody.bind(this);
  }

  getGrid() {
    const style = {
      width: "100%",
      height: "100%",
      backgroundColor: this.props.gridColor
    }
    const grid = this.props.grid;
    return (
      <div style={style}>

      </div>
    )
  }

  getBody() {
    return (
      <div>{this.props.label}</div>
    )
  }

  render() {
    const layer = this.props.layer;
    const grid = this.props.grid;

    const keymap = {
      'paneDown' : ['ctrl+alt+s', 'ctrl+k'],
      'paneRight' : ['ctrl+alt+d', 'ctrl+l'],
      'paneUp' : ['ctrl+alt+w', 'ctrl+i'],
      'paneLeft' : ['ctrl+alt+a', 'ctrl+j'],
      'growRow' : ['ctrl+shift+d', 'ctrl+shift+l'],
      'growColumn' : ['ctrl+shift+s', 'ctrl+shift+k'],
      'shrinkRow' : ['ctrl+shift+a', 'ctrl+shift+j'],
      'shrinkColumn' : ['ctrl+shift+w', 'ctrl+shift+i'],
      'toggleGrid' : ['ctrl+alt+v', 'ctrl+;'],
    }

    const lSPG = $a.layoutSetPaneGrid;
    const lTPG = $a.layoutTogglePaneGrid;

    const handlers = {
      'paneDown' : (e) => {
        if(grid.toggled && grid.toRow !== layer.grid.rows + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            fromRow: grid.fromRow + 1,
            toRow: grid.toRow + 1,
          }))
        }
        st(e);
      },
      'paneRight' : (e) => {
        if(grid.toggled && grid.toColumn !== layer.grid.columns + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            fromColumn: grid.fromColumn + 1,
            toColumn: grid.toColumn + 1,
          }))
        }
        st(e);
      },
      'paneUp' : (e) => {
        if(grid.toggled && grid.fromRow !== 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            fromRow: grid.fromRow - 1,
            toRow: grid.toRow - 1,
          }))
        }
        st(e);
      },
      'paneLeft' : (e) => {
        if(grid.toggled && grid.fromColumn !== 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            fromColumn: grid.fromColumn - 1,
            toColumn: grid.toColumn - 1,
          }))
        }
        st(e);
      },

      'growRow' : (e) => {
        if(grid.toggled && grid.toColumn !== layer.grid.columns + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            toColumn: grid.toColumn + 1,
          }))
        }
        st(e);
      },
      'growColumn' : (e) => {
        if(grid.toggled && grid.toRow !== layer.grid.rows + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            toRow: grid.toRow + 1,
          }))
        }
        st(e);
      },
      'shrinkRow' : (e) => {
        if(grid.toggled && grid.toColumn !== 1 && grid.toColumn > grid.fromColumn + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            toColumn: grid.toColumn - 1,
          }))
        }
        st(e);
      },
      'shrinkColumn' : (e) => {
        if(grid.toggled && grid.toRow !== 1 && grid.toRow > grid.fromRow + 1)
        {
          $d(lSPG(layer.label, this.props.index, {
            toRow: grid.toRow - 1,
          }))
        }
        st(e);
      },
      'toggleGrid': (e) => {$d(lTPG(layer.label, this.props.index)); st(e)},
    }


    const style = {
      gridRow: `${grid.fromRow} / ${grid.toRow}`,
      gridColumn: `${grid.fromColumn} / ${grid.toColumn}`,
    }
    return (
      <HotKeys style={style} keyMap={keymap} handlers={handlers}>
        {(this.props.grid.toggled) ? this.getGrid(): this.getBody()}
      </HotKeys>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    layer: state.yarljs_layers[ownProps.layerIndex],
    ...state.yarljs_layers[ownProps.layerIndex].panes[ownProps.index]
  }
})(Pane);
