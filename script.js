document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }
});

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const newSection = document.createElement("section");
        newSection.innerHTML = `<h2>New Section</h2>
                                <p>Content loaded dynamically...</p>`;
        document.body.appendChild(newSection);
    }
});



    // Buttons hover and click effect
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });

        button.addEventListener("click", () => {
            button.style.transform = "scale(0.9)";
            setTimeout(() => button.style.transform = "scale(1)", 200);
            
            // Random Button Color Change
            const colors = ["#e11d48", "#22c55e", "#3b82f6", "#f59e0b"];
            button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        });

        // Pulsating Buttons (Always Moving)
        button.style.animation = "pulse 2s infinite";
    });

    // Floating Effect (Always Moving Up & Down)
    const floatingSections = document.querySelectorAll(".floating");
    floatingSections.forEach(section => {
        section.style.position = "relative";
        section.style.animation = "float 3s ease-in-out infinite";
    });

    // Drifting Effect (Moving Left & Right)
    const driftingElements = document.querySelectorAll(".drift");
    driftingElements.forEach(el => {
        el.style.position = "relative";
        el.style.animation = "drift 5s ease-in-out infinite alternate";
    });

    // CSS Animations (Add these in your CSS file)
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        @keyframes drift {
            0% { transform: translateX(0px); }
            100% { transform: translateX(15px); }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.textContent = "⬆";
    scrollTopBtn.style.position = "fixed";
    scrollTopBtn.style.bottom = "20px";
    scrollTopBtn.style.right = "20px";
    scrollTopBtn.style.padding = "10px 15px";
    scrollTopBtn.style.borderRadius = "50%";
    scrollTopBtn.style.border = "none";
    scrollTopBtn.style.background = "#3b82f6";
    scrollTopBtn.style.color = "#fff";
    scrollTopBtn.style.fontSize = "18px";
    scrollTopBtn.style.cursor = "pointer";
    scrollTopBtn.style.display = "none";
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dark Mode Toggle with Smooth Transition
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.body.style.transition = "background 0.5s, color 0.5s";
        });
    }
});
