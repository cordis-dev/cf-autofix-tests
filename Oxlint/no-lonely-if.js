export function describe(value) {
    if (value > 0) {
        return "positive";
    } else {
        if (value < 0) {
            return "negative";
        }
    }
    return "zero";
}
