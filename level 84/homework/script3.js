function findMin(a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c);
}