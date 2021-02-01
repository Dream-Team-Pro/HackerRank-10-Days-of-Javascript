function modifyArray(nums) {
    return nums.map(n=> ((n & 1)? 3 : 2) * n);
}