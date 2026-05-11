class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        // Answers range from 1-x
        let left = 0;
        let right = x;
        while (left <= right) {
            let mid = Math.floor((right+left)/2);
            let squared = mid * mid;
            if (squared > x ) {
                right = mid - 1;
            } else if (squared < x ) {
                left = mid + 1
            } else if (squared === x) {
                return mid;
            }
        }
        return right;
    }
}
