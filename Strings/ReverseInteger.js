// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

const reverse = x => {
    const limit = 2147483648;
    const k = x < 0 ? -1 : 1;
    const n = ((Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};