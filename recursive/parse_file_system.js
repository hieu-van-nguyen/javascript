function parseFileSystem(node, currentPath = "") {
    const newPath = currentPath ? `${currentPath}/${node.name}` : node.name;
    console.log(`Found ${node.type}: ${newPath}`);

    if (node.type === "folder" && node.children) {
        node.children.forEach((child) => {
            parseFileSystem(child, newPath);
        });
    }
}

function findFile(node, targetName, currentPath = "") {
    const newPath = currentPath ? `${currentPath}/${node.name}` : node.name;
    if (node.name === targetName) {
        return newPath;
    }
    if (node.type === "folder" && node.children) {
        for (const child of node.children) {
            const result = findFile(child, targetName, newPath);   
            if (result) {
                return result;
            }
        }
    }
    return null;
}

function calculateFolderSize(node) {
    if (node.type === "file") {
        return node.size || 0; // Return file size, default to 0 if not specified
    }

    let totalSize = 0;
    if (node.children) {
        for (const child of node.children) {
            totalSize += calculateFolderSize(child);
        }
    }
    return totalSize;
}

const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    { name: "README.md", type: "file", size: 5 },
    { 
      name: "src", 
      type: "folder", 
      children: [
        { name: "index.js", type: "file", size: 12 },
        { name: "styles.css", type: "file", size: 8 }
      ]
    },
    { name: "package.json", type: "file", size: 2 }
  ]
};

parseFileSystem(fileSystem);
console.log(findFile(fileSystem, "styles.css"));

const totalKB = calculateFolderSize(fileSystem);
console.log(`Total System Size: ${totalKB}KB`); // Output: 27KB