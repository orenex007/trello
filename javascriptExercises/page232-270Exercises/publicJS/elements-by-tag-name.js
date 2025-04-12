function getElementsByTagName(node, tagName) {
    let elements = [];
    tagName = tagName.toUpperCase();

    function traverse(currentNode){
        if(currentNode.nodeName.toUpperCase() === tagName){
            elements.push(currentNode);
        }

        for (let child of currentNode.children) {
            traverse(child);
        }
    }

    traverse(node);
    return elements;
}

let paragraphs = getElementsByTagName(document.body, "p");
console.log(paragraphs);