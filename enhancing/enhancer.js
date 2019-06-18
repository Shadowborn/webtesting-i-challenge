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

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 10){
    durability = durability - 4;
  } else {
    durability = durability - 6;
  }
  return { ...item, enhancement, durability };
}

// enhancer repair should make durability 100
function repair(item) {
  item = { ...item, durability: 100 }

  return item;
}

function get(item) {
  return { ...item };
}
