document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("feedbackModal");
    var btn = document.getElementById("feedbackBtn");

    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
