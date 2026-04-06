document.addEventListener("DOMContentLoaded", function () {
    var nameTyped = new Typed("#typed-name", {
      strings: ["Hello, I'm Phillip Opiyo"],
      typeSpeed: 60,
      showCursor: true,
      cursorChar: "|",
      onComplete: function () {
        // Hide the name cursor before starting the title loop
        if (nameTyped.cursor) {
            nameTyped.cursor.style.display = "none";
        }

        new Typed("#typed-text", {
          strings: ["Full-Stack Developer", "Python Specialist", "Django Architect"],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: "|",
        });
      },
    });
});