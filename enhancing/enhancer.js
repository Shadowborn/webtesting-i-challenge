module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  if (enhancement < 20) {
    enhancement++;
  }
  return { ...item, enhancement };
}

// enhancer repair should make durabiity 100
function repair(item) {
  item = { ...item, durability: 100 }

  return item;
}

function get(item) {
  return { ...item };
}
