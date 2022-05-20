function calcGrad(point) {
    if (point >= 80) {
        return "A";
    } else if (point >= 70) {
        return "B";
    } else if (point >= 60) {
        return "C";
    } else if (point >= 50) {
        return "D";
    } else if (point < 0 || point > 100) {
        return "not in the range score";
    } else {
        return "F";
    }
}

module.exports = calcGrad;
