// Linear Space

function houseRobber1(houses) {
  let max_gold = []

  for(let i = 0; i < houses.length; i++) {
    let current = houses[i];
    let prevMax = max_gold[i - 1] || 0;
    let twoBackMax = max_gold[i - 2] || 0;
    max_gold.push(Math.max(current + twoBackMax, prevMax));
  }

  return max_gold[houses.length - 1];
} 

// houseRobber1([3, 5, 1, 3, 4, 5, 1]) // => 13

// Constant Space

function houseRobber2(houses) {
  let currentMax = 0;
  let prevMax = 0;

  for(let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse)
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax
} 

// houseRobber2([3, 5, 1, 3, 4, 5, 1]) // => 13