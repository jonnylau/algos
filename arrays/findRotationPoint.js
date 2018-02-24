const sample = ['h', 'i', 'a','b','c','d','e','f','g']; // ->2
const sample1 = ['i', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; // ->1
const sample2 = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'a']; // ->8
const sample3 = ['e', 'f', 'g', 'h', 'i', 'a', 'b', 'c', 'd'];

const findRotationPoint = (nums) => {
  let low = 0;
  let mid = Math.floor((nums.length-1)/2);
  let high = nums.length - 1;
  
  if (nums[mid] < nums[mid - 1]) return mid;
  if (nums[mid] > nums[mid + 1]) return mid + 1;

  while (nums[mid] > nums[mid-1] && nums[mid] < nums[mid+1]) {
    if (nums[low] >= nums[mid]) {
      high = mid - 1;
      mid = Math.floor((high - low) /2)
    }
    else if (nums[mid] >= nums[high]) {
      low = mid + 1;
      mid = Math.floor((high + low) / 2)
    }
    console.log(nums[low], nums[mid], nums[high])
    if (nums[mid] < nums[mid-1]) return mid;
    if (nums[mid] > nums[mid+1]) return mid+1;
  }
}

console.log(
  // findRotationPoint(sample),
  // findRotationPoint(sample1),
  // findRotationPoint(sample2),
  findRotationPoint(sample3),
);
// console.log('a' < 'b');
// TRANSFORMATION

//['h', 'i,', 'a','b','c','d','e','f','g'];
// 0, 4, 8
// 0-8 |   H  - C  - G
// 0-4 |   H  - I  - B
