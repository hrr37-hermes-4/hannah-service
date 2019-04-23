
var callCount = 0;
const incrementCallCount = () => {
  callCount++;
  return callCount;
}
module.exports = incrementCallCount;