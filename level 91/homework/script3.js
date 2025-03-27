function removeLastElement(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    return arr.pop();
}