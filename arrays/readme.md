METHODS

BINARY SEARCH:

  - Description: 
    - low + mid + high counters
    - while loop as long as high > low

  - Uses: 
      1. Sorted arrays.
        find Nth element in O(logN)
      2.  Rotated array.  
        One side is always sorted
      3. 

MULTIPLE POINTERS:
   - Description: 
    - keep multiple pointers and update the pointers using a while loop
    - O(n)
  - Uses: 
      1. findSmallestCommonNumber
      2. moveZeros
        

GREEDY METHODS
   - Description: Dynamic programming. Make an array to keep track of largest (or least) going left + going right
    - O(n)
  - Uses: 
      1. waterWells
      2. maxprofit (stocks)

FLIPPING
    - Description : reverse array to get elements to the desired SIDE.
      -Reverse the edge (number of elements to be rotated) to get back in order.
      -Reverse the main (array.length - number of elements to be rotated) to get back in order.

      -0(N)
      -O(1) memory
    - Uses: 
      1. rotate Array
        