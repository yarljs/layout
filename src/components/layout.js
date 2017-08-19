import React from 'react';
import {connect} from 'react-redux';
import {HotKeys} from 'react-hotkeys';

import Hud from './hud';
import Layer from './layer';


const st = (e)=>{e.preventDefault(); return false;}

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  getHud(hud) {
    const style = {
      backgroundColor: "black",
      position: "fixed",
      display: (hud.toggled) ? "initial": "none",
      opacity: .99,
      zOrder: Number.MAX_SAFE_INTEGER,
      width: "100%", height:"100%"
    };

    return (
      <div style={style} >
        <Hud {...hud} />
      </div>
    );
  }

  render() {
    const body = this.props.layers.map((e, i) => {
      return (
        <div key={i} style={{backgroundColor: "white", position: "absolute", zOrder: i,width: "100%", height:"100%"}}>
          <Layer  focused={i === this.props.layers.length - 1 && !this.props.hud.toggled} {...e}/>
        </div>
      )
    });

    const tH = $a.layoutToggleHud;
    const keymap = {
        'toggleHud': 'ctrl+`',
    };
    const handlers = {
      toggleHud: (e) => {$d(tH()); st(e)},
    }

    return (
      <HotKeys style={{width: "100%", height: "100%"}} keyMap={keymap} handlers={handlers}>
        <div style={{width: "100%", height:"100%"}}>
          {body}
          {this.getHud(this.props.hud)}
        </div>
      </HotKeys>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    layers: state.yarljs_layers,
    hud: state.yarljs_layer_hud
  }
})(Layout);
