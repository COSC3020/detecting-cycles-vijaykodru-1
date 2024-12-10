# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst case time complexity for the implemented code is $\Theta(V + E)$. In this V represents the vertices and E represents the edges. This is because the depth first search starts iterating over any vertices that are not visited which takes time complexity of $O(V)$. In each iteration it traverses through evry edge of that vertice to find the cycle which takes the time complexity of $O(E)$. So in total we end up with worst case time complexity of $\Theta(V + E)$.

References:

https://www.geeksforgeeks.org/detect-cycle-undirected-graph/

The above website gave a straight forward understanding of the detecting cycles

https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/

The above website gave me a good idea of doing DFS


I looked at the following repository for understanding how they initialized their visited array. However I made sure that I set everything inside the visited array to be false. So I can mark one by one as the nodes are visited.

detecting-cycles-IshitaPatel18

ChatGPT wrote the test cases involving cycles, I wrote the tests for empty and single node cases.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice