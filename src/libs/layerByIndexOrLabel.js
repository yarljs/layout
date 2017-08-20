
export default function(layers, action) {
  let i;
  if(typeof action.layer === "string")
  {
    i = layers.findIndex((e) => {return e.label === action.layer});
  }
  else
  {
    i = (action.layer < layers.length) ? action.layer: -1;
  }
  return i;
}
