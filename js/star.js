function getStarPath(side) {
    let str,
        ax = 0.15,
        bx = (1 - 2 * ax) / 2,
        cx = 0.3,
        dx = 0.5,
        ex = 0.3,
        ay = 0.3, by = 0.3,
        cy = (1 - ay - by),
        dy = 0.25,
        am = ax / ay;
    cx = (am * cy);
    ex = ex * am;
    str = " l" + (ax * side) + "," + (ay * side)
        + " h" + (bx * side)
        + " l-" + (cx * side) + "," + (by * side)
        + " l" + (cx * side) + "," + (cy * side)
        + " l-" + (dx * side) + ",-" + (dy * side)
        + " l-" + (dx * side) + "," + (dy * side)
        + " l" + (cx * side) + ",-" + (cy * side)
        + " l-" + (cx * side) + ",-" + (by * side)
        + " h" + (bx * side)
        + " z";
    return str;
}