document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-category");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const subList = this.nextElementSibling;
            const icon = this.querySelector("img");
            const plusIcon = icon.dataset.plus;
            const minusIcon = icon.dataset.minus;

            if (subList.classList.contains("hidden")) {
                subList.classList.remove("hidden");
                icon.src = minusIcon;
            } else {
                subList.classList.add("hidden");
                icon.src = plusIcon;
            }
        });
    });
});


