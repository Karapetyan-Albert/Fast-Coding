let letterArr = [
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Equal",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Quote",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM"
]

let selectedEl

function randomItem(arr){
  /* let array_length = arr.length;
  let value = Math.random() * array_length;
  let = Math.floor(value);
  selectedEl = arr[itemValue]
  return selectedEl; */
  let index = Math.floor(Math.random() * arr.length)
  selectedEl = arr[index];
  return selectedEl
}   



