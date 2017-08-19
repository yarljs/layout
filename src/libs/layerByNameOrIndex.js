
export default function(state, action) {
  let res;
  if(typeof action.target === "string")
  {
    res = state.yarljs_layers.filter((e, i) => {
      return (e.label !== action.target);
    });
  }
  else if(typeof action.target === "number")
  {
    res = state.yarljs_layers.filter((e, i) => {
      return (i !== action.target);
    });
  }

  return res;
}
