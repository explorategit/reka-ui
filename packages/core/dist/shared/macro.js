function isCut(event) {
  return (event.key === "x" || event.key === "X") && (event.ctrlKey || event.metaKey);
}
function isCopy(event) {
  return (event.key === "c" || event.key === "C") && (event.ctrlKey || event.metaKey);
}
function isPaste(event) {
  return (event.key === "v" || event.key === "V") && (event.ctrlKey || event.metaKey);
}

export { isCopy as a, isPaste as b, isCut as i };
//# sourceMappingURL=macro.js.map
