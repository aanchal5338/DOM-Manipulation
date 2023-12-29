document.addEventListener("DOMContentLoaded", function () {
    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        // Get input values
        var field1Value = document.getElementById("field1").value;
        var field2Value = document.getElementById("field2").value;
        var field3Value = document.getElementById("field3").value;

        // Create a new paragraph element
        var paragraph = document.createElement("p");

        // Set the text content of the paragraph
        paragraph.textContent = `Field 1: ${field1Value}, Field 2: ${field2Value}, Field 3: ${field3Value}`;

        // Set a random color for the paragraph
        paragraph.style.color = getRandomColor();

        // Append the paragraph to the "results" div
        document.getElementById("results").appendChild(paragraph);

        // Clear the form fields
        document.getElementById("field1").value = "";
        document.getElementById("field2").value = "";
        document.getElementById("field3").value = "";
    }

    // Attach the form submission event handler
    document.getElementById("myForm").addEventListener("submit", handleFormSubmit);
});
