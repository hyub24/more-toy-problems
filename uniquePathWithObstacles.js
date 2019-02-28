/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;
    let dp = Array(obstacleGrid.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = (Array(obstacleGrid[0].length).fill(0))
    }
    dp[0][0] = 1;
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] !== 1) {
                if (dp[i + 1] !== undefined) {
                    dp[i + 1][j] += dp[i][j];
                }
                if (dp[i][j + 1] !== undefined) {
                    dp[i][j + 1] += dp[i][j];
                }
            } else dp[i][j] = 0;
        }
    }
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

// dp for the win