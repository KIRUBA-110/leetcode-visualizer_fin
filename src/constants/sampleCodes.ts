/**
 * Sample Code Constants
 * 
 * Pre-written algorithm examples for Python and C
 */

import type { Language } from '../hooks/useCodeRunner';

// Sample Python code - Two Sum
export const PYTHON_TWO_SUM = `def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

result = twoSum([2, 7, 11, 15], 9)
`;

// Sample Python code - Reference test
export const PYTHON_REFERENCE = `# Reference tracking demo
a = [1, 2, 3]
b = a           # b points to same list as a
b[0] = 999      # Modifying b also modifies a
c = [1, 2, 3]   # c is a NEW list (different ID)
`;

// Sample C code - Two Sum
export const C_TWO_SUM = `#include <stdio.h>

int main() {
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int n = 4;
    int i, j;
    
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                printf("Found: [%d, %d]\\n", i, j);
                return 0;
            }
        }
    }
    return -1;
}
`;

// Sample C code - Binary Search
export const C_BINARY_SEARCH = `#include <stdio.h>

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int n = 7;
    int target = 7;
    int left = 0;
    int right = n - 1;
    int mid;
    
    while (left <= right) {
        mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            printf("Found at index: %d\\n", mid);
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    printf("Not found\\n");
    return -1;
}
`;

// Grouped sample codes by language
export const SAMPLE_CODES: Record<Language, { name: string; code: string }[]> = {
    python: [
        { name: 'Two Sum', code: PYTHON_TWO_SUM },
        { name: 'Reference Test', code: PYTHON_REFERENCE },
    ],
    c: [
        { name: 'Two Sum', code: C_TWO_SUM },
        { name: 'Binary Search', code: C_BINARY_SEARCH },
    ],
};

// Default code for each language
export const DEFAULT_CODE: Record<Language, string> = {
    python: PYTHON_TWO_SUM,
    c: C_TWO_SUM,
};
