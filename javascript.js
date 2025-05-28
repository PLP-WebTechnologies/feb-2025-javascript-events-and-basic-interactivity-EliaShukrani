 document.getElementById("actionBtn").addEventListener("click", () => {
      alert("Button clicked!");
    });
    document.getElementById("hoverText").addEventListener("mouseover", () => {
      hoverText.style.color = "red";
    });

    document.getElementById("keyInput").addEventListener("keypress", (e) => {
      console.log(`You pressed: ${e.key}`);
    });

    document.getElementById("actionBtn").addEventListener("dblclick", () => {
      document.body.style.backgroundColor = "#e0f7fa";
    });
 
    const magicBtn = document.getElementById("magicBtn");
    magicBtn.addEventListener("click", () => {
      magicBtn.textContent = "Ta-Da!";
      magicBtn.style.backgroundColor = "limegreen";
    });

    // Image slideshow
    const galleryImg = document.getElementById("galleryImg");
    const images = [
      "https://via.placeholder.com/200x150?text=Image+1",
      "https://via.placeholder.com/200x150?text=Image+2",
      "https://via.placeholder.com/200x150?text=Image+3"
    ];
    let current = 0;
    setInterval(() => {
      current = (current + 1) % images.length;
      galleryImg.src = images[current];
    }, 2000);

    // Accordion
    document.querySelectorAll(".accordion-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("active");
      });
    });

    // Form validation
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const feedback = document.getElementById("feedback");

    email.addEventListener("input", () => {
      const valid = /\S+@\S+\.\S+/.test(email.value);
      feedback.textContent = valid ? "Email looks good!" : " Invalid email.";
    });

    password.addEventListener("input", () => {
      feedback.textContent =
        password.value.length >= 8 ? "Password is strong!" : " Too short.";
    });

    document.getElementById("signupForm").addEventListener("submit", (e) => {
      if (!email.value || !password.value) {
        e.preventDefault();
        alert("Please fill out all fields.");
      }
    });