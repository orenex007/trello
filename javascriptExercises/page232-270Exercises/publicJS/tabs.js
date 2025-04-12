function asTabs(node) {
    let sections = Array.from(node.children);
    let tabList = document.createElement("div");

    sections.forEach((section, i) => {
        let button = document.createElement("button");
        button.textContent = section.getAttribute("data-tabname");

        button.addEventListener("click", () => {
            sections.forEach(s => s.style.display = "none");
            section.style.display = "";

            Array.from(tabList.children).forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });

        tabList.appendChild(button);
    });

    node.insertBefore(tabList, node.firstChild);

    // תצוגת ברירת מחדל
    sections.forEach((s, i) => s.style.display = i === 0 ? "" : "none");
    tabList.firstChild.classList.add("active");
}

// הפעלת הפונקציה על האלמנט עם id="tab-panel"
asTabs(document.querySelector("#tab-panel"));