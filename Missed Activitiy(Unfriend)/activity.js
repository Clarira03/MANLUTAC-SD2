let friends = [];

function showFriends() {
if (friends.length <= 0) {
    console.log("no friends");
} else {
    console.log(friends);
}
}

function addFriend(name) {
if (friends.includes(name.toUpperCase())) {
    console.log(`${name} is already on your friend list.`);
} else {
    friends.push(name.toUpperCase());
    console.log(`You added ${name.toUpperCase()}`);
}
return friends;
}

//Remove specific friend -> using their name
function unfriend(name) {
let index = friends.indexOf(name.toUpperCase());
if (index == -1) {
    console.log(`${name} is not on your friend list.`);
    return false;
}

friends.splice(index, 1);
console.log(`${name} has been removed from your friend list.`);
}