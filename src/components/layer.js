import React from 'react';
import {connect} from 'react-redux';
import {HotKeys} from 'react-hotkeys';

import Pane from './pane';

import {randomColor} from '../libs';

const st = (e)=>{e.preventDefault(); return false;}

const tG = (toggle, fn) => {
  return (e) => {
    if(toggle) {fn(e);  st(e);}
  }
}

class Layer extends React.Component {
  constructor(props) {
    super(props);
    this.getGrid = this.getGrid.bind(this);
    this.getBody = this.getBody.bind(this);
  }

  getGrid() {
    let res = [];
    const x = this.props.grid.rows;
    const y = this.props.grid.columns;
    for(let i = 1; i <= x; i++)
    for(let j = 1; j <= y; j++)
    {
      const style = {
        backgroundColor: randomColor(),
        border: "solid",
        gridRow: `${i}`,
        gridColumn: `${j}`
      }
      res.push(<div key={`${i} ${j}`} style={style}></div>)
    }
    return res;
  }

  getBody() {
      const body = (this.props.panes.length) ? this.props.panes.map((e, i) => {
        return (
          <Pane key={i} index={i} gridColor={randomColor()} layerIndex={this.props.index} />
        )
      })
      : <div>No Panes</div>
    return body
  }

  render() {

    const {grid, label} = this.props;
    const {toggled} = grid;
    const style = {
      display: "grid",
      grid: `repeat(${grid.rows}, auto) / repeat(${grid.columns}, auto)`,
      width: "100%",
      height: "100%"
    }
    const keymap = {
      'addRow' : ['ctrl+alt+s', 'ctrl+k'],
      'addCol' : ['ctrl+alt+d', 'ctrl+l'],
      'removeRow' : ['ctrl+alt+w', 'ctrl+i'],
      'removeCol' : ['ctrl+alt+a', 'ctrl+j'],
      'toggleGrid' : ['ctrl+alt+v', 'ctrl+/'],
      'addPane': ['ctrl+.'],
    }
    const lSLG = $a.layoutSetLayerGrid;
    const lTLG = $a.layoutToggleLayerGrid;
    const lAP = $a.layoutAddPane;
    //XXX Disable these events if they are dispatched while they grid view is hidden
    const handlers = {
      'addRow': tG(toggled, (e) => {$d(lSLG(label, {...grid, rows: grid.rows + 1}))}),
      'addCol': tG(toggled, (e) => {$d(lSLG(label, {...grid, columns: grid.columns + 1}))}),
      'removeRow': tG(toggled, (e) => {$d(lSLG(label, {...grid, rows: Math.max(1, grid.rows - 1)}))}),
      'removeCol': tG(toggled, (e) => {$d(lSLG(label, {...grid, columns: Math.max(1, grid.columns - 1)}))}),

      'addPane': () => {$d(lAP(label, `${label}.EmptyPane`))},
      'toggleGrid': (e) => {$d(lTLG(label)); st(e)},
    }

    return (
      <HotKeys id={`layer-${label}-focus`} style={{width: "100%", height: "100%"}} keyMap={keymap} handlers={handlers}>
        <div style={style}>
          {(this.props.grid.toggled) ? this.getGrid(): this.getBody()}
        </div>
      </HotKeys>

    );
  }
}

export default connect((state, ownProps) => {
  return {
  }
})(Layer);
