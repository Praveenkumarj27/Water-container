
var trap = function (height) {
    const maxLeft = [];
    const maxRight = [];

    let max = 0
    for (let i = 0; i < height.length; i++) {
        max = Math.max(height[i], max)
        maxLeft[i] = max
    }

    max = 0
    for (let i = height.length - 1; i > -1; i--) {
        max = Math.max(height[i], max)
        maxRight[i] = max
    }

    let maxWater = 0
    for (let i = 0; i < height.length; i++) {
        const boundary = Math.min(maxLeft[i], maxRight[i])
        maxWater += boundary - height[i]
    }

    return maxWater
};
console.log(trap([0, 4, 0, 0, 0, 6, 0, 6, 4, 0]));