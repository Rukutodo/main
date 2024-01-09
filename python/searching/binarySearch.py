def binarySearch(arr,key,low,high,mid):
    if arr[mid] == key:
        return mid
    elif key > arr[mid]:
        return binarySearch(arr,key,mid+1,len(arr)-1,(low+high)//2)
    elif key < arr[mid]:
        return binarySearch(arr,key,low,mid-1,(low+high)//2)


    
   

arr = [1,2,3,4,5,6,7,8,9,10]
low = arr[0]
high = len(arr)-1
mid = (low+high)//2
key = int(input("Enter Key:"))
res = binarySearch(arr,key,low,high,mid)
print(res)

