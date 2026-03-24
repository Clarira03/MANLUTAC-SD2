let result = "";
for (let i = 1; i <= 50; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("COUNT:" + i + " - COCO MELON");
} else if (i % 3 === 0) {
console.log("COUNT:" + i + " - COCO");
} else if (i % 5 === 0) {
console.log("COUNT:" + i + " - MELON");
} else {
console.log("COUNT:" + i);
}
}