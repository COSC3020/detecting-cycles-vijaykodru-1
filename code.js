function hasCycle(graph) {
    // Depth First Search
    function dfs(node, visited, parent) {
        visited[node] = true;

        // Explore all adjacent nodes (neighbors)
        for (let neighbor of graph[node]) {
            // If the neighbor is not visited, recurse
            if (!visited[neighbor]) {
                if (dfs(neighbor, visited, node)) {
                    return true; // Cycle detected
                }
            } 
            // If the neighbor is visited and not the parent, a cycle is found
            else if (neighbor !== parent) {
                return true;
            }
        }

        return false; // No cycle found
    }

    // Array to track visited nodes
    let visited = new Array(graph.length).fill(false);

    // Run DFS from every unvisited node
    for (let i = 0; i < graph.length; i++) {
        if (!visited[i]) {
            if (dfs(i, visited, -1)) {
                return true; // Cycle found
            }
        }
    }

    return false; // No cycle found
}
