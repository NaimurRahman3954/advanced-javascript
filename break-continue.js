const nums = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < nums.length; i++) {
   if (nums[i]>5){
      break;
   }
   const element = nums[i];
   console.log(element);
} 

const nums2 = [1,-2,3,-4,5,-6,7,-8,9];
for (let i = 0; i < nums2.length; i++) {
   // skips negative values
   if (nums2[i]<0){
      continue;      
   }
   const element2 = nums2[i];
   console.log(element2);
} 