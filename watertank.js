var water = function (arr) {
    const maxFromLeft = [];
    const maxFromRight = [];

    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(height[i], max)
        maxFromLeft[i] = max
    }

    max = 0
    for (let i = arr.length - 1; i > -1; i--) {
        max = Math.max(height[i], max)
        maxFromRight[i] = max
    }

    let maxWater = 0
    for (let i = 0; i < arr.length; i++) {
        const boundary = Math.min(maxFromLeft[i], maxFromRight[i])
        maxWater += boundary - height[i]
    }

    return maxWater
};
console.log(water([0, 4, 0, 0, 0, 6, 0, 6, 4, 0]));
