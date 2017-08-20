
export default function(panes, action) {
  let i;
  if(typeof action.pane === "string")
  {
    i = panes.findIndex((e) => {return e.label === action.pane});
  }
  else
  {
    i = (action.pane < panes.length) ? action.pane: -1;
  }
  return i;
}
