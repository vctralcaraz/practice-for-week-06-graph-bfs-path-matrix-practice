function findNeighbors(node, matrix) {
    const neighbors = [];

    // Up
    if(node[0] - 1 >= 0) neighbors.push([node[0] - 1, node[1]]);

    // Down
    if(node[0] + 1 < matrix.length) neighbors.push([node[0] + 1, node[1]]);

    // Left
    if(node[1] - 1 >= 0) neighbors.push([node[0], node[1] - 1]);

    // Right
    if(node[1] + 1 < matrix[0].length) neighbors.push([node[0], node[1] + 1]);

    // Your code here
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    // Your code here
    const queue = [[startNode]];
    const visited = new Set();
    const path = [];

    while(queue.length > 0) {
        let currentPath = queue.shift();
        let lastNode = currentPath[currentPath.length - 1];
        let [row, col] = lastNode;

        // console.log(currentPath)
        if(!visited.has(lastNode.toString())) {
            visited.add(lastNode.toString());
            path.push(lastNode);

            let currentVal = matrix[row][col];
            if(currentVal === endValue) return path;

            let neighbors = findNeighbors(lastNode, matrix);
            neighbors.forEach(el => {
                let newPath = path.slice()
                newPath.push(el);
                queue.push(newPath);
            })
        }
    }

    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// // EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// // returns an array of coordinates with no duplicates:

// // [
// //     [ 0, 0 ], [ 1, 0 ],
// //     [ 0, 1 ], [ 2, 0 ],
// //     [ 1, 1 ], [ 0, 2 ],
// //     [ 3, 0 ], [ 2, 1 ],
// //     [ 1, 2 ], [ 0, 3 ],
// //     [ 3, 1 ], [ 2, 2 ],
// //     [ 1, 3 ], [ 3, 2 ],
// //     [ 2, 3 ], [ 3, 3 ]
// //  ]

// // Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// // 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// is not found
// false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
