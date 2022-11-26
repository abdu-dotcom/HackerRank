function countApplesAndOranges({ s, t, a, b, apples, oranges }) {
    // Write your code here
    let distanceApplesFromTree = [];
    let distanceOrangeFromTree = [];
    let appleCloseFromHouse = 0;
    let orangeleCloseFromHouse = 0;
    let fruits = [];

    //get the value of the distance each apple falls
    apples.forEach((apple) => {
        distanceApplesFromTree.push(apple + a);
    });
    //get the value of the distance each orange falls
    oranges.forEach((orange) => {
        distanceOrangeFromTree.push(orange + b);
    });

    // push in array 
    fruits.push(distanceApplesFromTree, distanceOrangeFromTree);

    // count the number of fruits the fell near Sam's house
    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < fruits[i].length; j++) {
            if (i == 0) {
                if (fruits[i][j] >= s && fruits[i][j] <= t) {
                    appleCloseFromHouse += 1;
                }
            } else if (i == 1) {
                if (fruits[i][j] >= s && fruits[i][j] <= t) {
                    orangeleCloseFromHouse += 1;
                }
            }
        }
    }
    console.log(appleCloseFromHouse);
    console.log(orangeleCloseFromHouse);
}

countApplesAndOranges({
    s: 7,
    t: 11,
    a: 5,
    b: 15,
    apples: [-2, 2, 1],
    oranges: [5, -6]
})

// references https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true