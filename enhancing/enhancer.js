module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

// enhancer repair should make durabiity 100
function repair(item) {
  item = { ...item, durability: 100 }

  return item;
}

function get(item) {
  return { ...item };
}
