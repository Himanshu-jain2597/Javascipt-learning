
class Solution 
{
   
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        let start = 0;
        let end = 0;
         let ans = [];
        let cur_sum = 0;
        for(let i=0;i<arr.length;i++) {
            cur_sum+=arr[i];
            if(cur_sum>s) {
                while(cur_sum>s) {
                    cur_sum-=arr[start];
                    start++;
                }
            }
                if(cur_sum==s){
                    ans.push(start+1);
                    ans.push(i+1);
                    break;
                }
            }
            if(ans.length===0)
             ans.push(-1);
            return ans;
        }
        //your code here
    }
