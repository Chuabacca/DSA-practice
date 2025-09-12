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

// ========================

// Medium – Smallest substring containing all characters of another string
// Example: Given "ADOBECODEBANC" and target "ABC", find the smallest substring that
// contains all A, B, and C.
//
//Why sliding window? You’re “stretching” the right pointer to include enough characters,
//then “shrinking” the left pointer to minimize the window while still meeting the requirement.

const title2 = '===SMALLEST SUBSTRING==='
const case2 = "ADOBECODEBANC"
const target2 = "ABC"
const expected2 = "BANC"

const smallestSubstring = (str: string, tar: string) => {
  console.log(title2)
  // Creat a dictionary of the values we need and tracking variables
  let need: {[key: string]: number} = {}
  
  for (const c of tar) {
    need[c] = (need[c] ?? 0) + 1
  }

  // Create tracking variables
  // The number of required characters we've collected so far
  let have: {[key: string]: number} = {}
  // Efficiently track whether or not we have a valid substring
  let haveCount = 0
  let requiredCount = Object.keys(need).length
  // pointers
  let left = 0
  let right = 0
  // track the meinimum substring
  let minStart = 0
  let minLength = Infinity

  while (right < str.length) {
    // Advance the right pointer
    const c = str[right]
    if (c) {
      have[c] = (have[c] ?? 0) + 1
      if (have[c] === need[c]) {
        haveCount++
      }
    }
    right++

    // When we find all the required characters, try to advance the left pointer and
    // close the window to find a smaller valid substring
    while (haveCount === requiredCount) {
      // If the current substring is smaller, update the min start and length
      if ((right - left) < minLength) {
        minStart = left
        minLength = right - left
      }

      // Remove a character on the left and recheck requirements
      const d = str[left]
      if (d) {
        // If the character on the left is one that we need, decrement the value in have
        if (d in need) {
          have[d] = (have[d] ?? 0) - 1
          // If we are below the minimum characters we need, decrement that haveCount tracking
          if (have[d] < need[d]!) {
            haveCount--
          }
        }
      }
      left++
    }
  }

  console.log(`Expected: ${expected2}`)
  console.log(`Result:   ${str.slice(minStart, minStart + minLength)}`)
}

// Takeaways:
// * Use dictionaries to efficiently store and lookup the required characters.
// * A tracking variables like haveCount and requiredCount let you check requirements
//   very quickly.
// * The window pointers always move, track the best match for the requirements with
//   separate vars.
// * Nesting loops in a sliding window solution is OK because only one loop runs at a
//   time.

smallestSubstring(case2, target2)

// ========================

// Hard – Longest substring with at most k distinct characters
// Example: Given "eceba" and k = 2, the answer is "ece" with length 3.
// 
// Why sliding window? The right pointer expands to add new characters, and the left
// pointer contracts when you exceed k distinct characters, always maintaining the invariant.
