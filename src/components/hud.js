import React from 'react';
import {connect} from 'react-redux';
import colors from '../data/colors';
import {HotKeys} from 'react-hotkeys';


const st = (e)=>{e.preventDefault(); return false;}

class Hud extends React.Component {
  constructor(props) {
    super(props);
    this.getGrid = this.getGrid.bind(this);
  }

  getGrid() {
    let res = [];
    const x = this.props.grid.rows;
    const y = this.props.grid.columns;
    const c = Object.keys(colors);
    for(let i = 1; i <= x; i++)
    for(let j = 1; j <= y; j++)
    {
      const style = {
        backgroundColor: c[Math.floor(Math.random() * (c.length -1))],
        border: "solid",
        gridRow: `${i}`,
        gridColumn: `${j}`
      }
      res.push(<div key={`${i} ${j}`} style={style}></div>)
    }
    return res;
  }

  render() {
    const {grid, label} = this.props;


    const style = {
      display: "grid",
      grid: `repeat(${grid.rows}, auto) / repeat(${grid.columns}, auto)`,
      width: "100%",
      height: "100%"
    }
    const keymap = {
      'addRow' : 'ctrl+down',
      'addCol' : 'ctrl+right',
      'removeRow' : 'ctrl+up',
      'removeCol' : 'ctrl+left',
    }
    const lSLG = $a.layoutSetHudGrid;
    const handlers = {
      'addRow': (e) => {$d(lSLG(label, {...grid, rows: grid.rows + 1})); st(e)},
      'addCol': (e) => {$d(lSLG(label, {...grid, columns: grid.columns + 1})); st(e)},
      'removeRow': (e) => {$d(lSLG(label, {...grid, rows: Math.max(1, grid.rows - 1)})); st(e)},
      'removeCol': (e) => {$d(lSLG(label, {...grid, columns: Math.max(1, grid.columns - 1)})); st(e)},
    }

    return (
      <HotKeys id="hud-focus" style={{width: "100%", height: "100%"}} keyMap={keymap} handlers={handlers}>
        <div ref={(_hk)=>{this._hk = _hk;}} style={style}>
          {this.getGrid()}
        </div>
      </HotKeys>

    );
  }
}

export default connect((state, ownProps) => {
  return {
  }
})(Hud);
