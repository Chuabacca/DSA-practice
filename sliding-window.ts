// Maximum sum of k consecutive elements
//
// Example: Given [2, 1, 5, 1, 3, 2] and k = 3, find the maximum sum of any 3 consecutive
// numbers.
//
// Why sliding window? Instead of recalculating each sum from scratch, we can “slide” the
// window by subtracting the element that’s leaving and adding the one that’s entering.

const title = '===SUM OF THREES==='
const case1 = [2, 1, 5, 1, 3, 2]
const expected = [8, 7, 9, 6]

const sumOfThrees = (arr: number[], k: number) => {
  console.log(title)
  var left = 0
  var currentSum = 0
  var result: number[] = []
  
  for (let right = 0; right < arr.length; right++) {
    // Start adding consecutive values in the array
    currentSum += arr[right]!

    // Once we reach index 3 (collected 4 elements),
    // start subtracting the value at left pointer and move the pointer
    if (right >= k) {
      currentSum -= arr[left]!
      left++
    }

    // Once we reach index 2 (collected 3 elements), write the sums
    if (right >= k - 1) {
      result.push(currentSum)
    }
  }


  console.log(`Expected: ${expected}`)
  console.log(`Result:   ${result}`)
}

// Takeaway: By using a sliding window approach, we reuse previous work by updating the
// window (currentSum) instead of recomputing from scratch. Instead of O(n*k) complexity
// we are able to achieve O(n).

sumOfThrees(case1, 3)
