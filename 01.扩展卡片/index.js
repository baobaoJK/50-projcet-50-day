var panel = document.querySelectorAll(".panel");

// 排他思想
for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener('click', function () {
        for (var j = 0; j < panel.length; j++) {
            panel[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}

// 排他思想
panel.forEach((pane) => {
    pane.addEventListener('click', () => {
        panel.forEach((pane) => {
            pane.classList.remove('active');
        });
        pane.classList.add("active");
    });
});