
export default function(layers, action) {
  let i;
  if(typeof action.target === "string")
  {
    i = layers.findIndex((e) => {return e.label === action.target});
  }
  else
  {
    i = (action.target < layers.length) ? action.target: -1;
  }
  return i;
}
