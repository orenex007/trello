function getElementsByTagName(node, tagName) {
    const elements = [];
    const tagNameForUpper = tagName.toUpperCase();

    function traverse(currentNode) {
        if (currentNode.nodeName.toUpperCase() === tagNameForUpper) {
            elements.push(currentNode);
        }

        for (let child of currentNode.children) {
            traverse(child);
        }
    }

    traverse(node);
    return elements;
}

const paragraphs = getElementsByTagName(document.body, "p");
console.log(paragraphs);