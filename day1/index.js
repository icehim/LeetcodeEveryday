var twoSum = function(nums, target) {
    var arr = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                arr = [i,j]
            }
        }
        if(arr.length===2) break
    }
    return arr
};
