module.exports = function(conditionalA, conditionalB, options) {
  if(conditionalA && conditionalB) {
    return options.fn(this);
  }

  return options.inverse(this);
}
