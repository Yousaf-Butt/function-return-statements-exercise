function greaterThan100(number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    }
};

// var result = greaterThan100(42);
// console.log(result);

function brendaTheBouncerBot(maxPeople, currentPeople, age) {
    if (currentPeople >= maxPeople) {
        return "It's too busy now, come back later.";
    }
    else if (age < 18) {
        return "This is a club for adults.";
    }
    else {
        return "Come in.";
    }
};

// const answer = brendaTheBouncerBot(50, 35, 41);
// console.log(answer);

function averageNumber(n1, n2, n3, n4, n5) {
    const average = (Math.round((n1 + n2 + n3 + n4 + n5) / 5));
    return average;
}

result2 = averageNumber(7, 9, 7, 8, 6);
console.log(result2);