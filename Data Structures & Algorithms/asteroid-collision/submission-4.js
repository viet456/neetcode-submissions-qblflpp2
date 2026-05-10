class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for (let i = 0; i < asteroids.length; i++) {
            let asteroid = asteroids[i];
            stack.push(asteroid);
            // Collisions ONLY happen when the top of the stack is moving East (+) 
            // AND the incoming asteroid is moving West (-)
            while (stack.length >= 2 && stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0) {
                let latest = stack[stack.length - 1];
                let former = stack[stack.length - 2];
                // Opposite signs
                if (Math.abs(latest) === former) {
                    stack.pop();
                    stack.pop();
                // Positive, negative
                } else if (latest < former) {
                    // Negative (west) is bigger than positive (east)
                    if (Math.abs(latest) > former) {
                        // Remove both latest and former,
                        // Add the surviving latest
                        stack.pop();
                        stack.pop();
                        stack.push(asteroid);
                    } else {
                        // Negative (west) is smaller than positive (east)
                        // Remove latest
                        stack.pop();
                    }
                } 
                
            }
        }
        return stack;
    }
}
