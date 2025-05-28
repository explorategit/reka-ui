'use strict';

function isCut(event) {
  return (event.key === "x" || event.key === "X") && (event.ctrlKey || event.metaKey);
}
function isCopy(event) {
  return (event.key === "c" || event.key === "C") && (event.ctrlKey || event.metaKey);
}
function isPaste(event) {
  return (event.key === "v" || event.key === "V") && (event.ctrlKey || event.metaKey);
}

exports.isCopy = isCopy;
exports.isCut = isCut;
exports.isPaste = isPaste;
//# sourceMappingURL=macro.cjs.map
