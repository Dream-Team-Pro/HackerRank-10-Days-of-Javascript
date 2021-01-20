function getSecondLargest(nums) {
    // Complete the function
    let i = 0, first = 0, second = 0;
    for (i; i < nums.length; i++){
        if(nums[i] > first){
            second = first;
            first = nums[i];
        }else if(nums[i] < first && nums[i] > second){
            second = nums[i];
        }        
    }
    return second;
}