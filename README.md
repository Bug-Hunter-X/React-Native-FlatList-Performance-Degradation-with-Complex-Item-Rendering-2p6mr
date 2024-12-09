# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue in React Native's `FlatList` component when dealing with complex item rendering and large datasets. The initial implementation (`slowFlatList.js`) exhibits slow scrolling and stuttering due to intensive computations within the `renderItem` function. The optimized version (`optimizedFlatList.js`) showcases techniques to mitigate this problem.

## Problem:

Rendering complex list items within `FlatList` can be computationally expensive, leading to significant performance bottlenecks, especially when the dataset is large. Frequent updates to the data can further exacerbate the problem.

## Solution:

The solution involves several strategies to optimize rendering:

* **Memoization:** Use `useMemo` hook to prevent unnecessary re-renders of computationally expensive components within the list item.
* **PureComponent:** Utilize `React.PureComponent` to avoid re-rendering if props haven't changed.
* **Item optimization:** Simplify the rendering logic within individual list items to reduce processing time.
* **Virtualization:** If the dataset is extremely large, consider using `windowSize` prop for `FlatList` to control the number of rendered items at a time.

## How to run:

1. Clone the repo: `git clone ...`
2. Navigate to the directory: `cd ...`
3. Install dependencies: `npm install`
4. Run the app: `npx react-native run-android` or `npx react-native run-ios`