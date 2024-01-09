def bubbleSort(arr):
    for i in range(0,len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i] > arr[j]:
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    return arr    
    









arr = [1,5,3,4,2,6,8,7,9,11,0,10]
print(arr)
res = bubbleSort(arr)
print(res)
