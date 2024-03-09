document.addEventListener("DOMContentLoaded", function() {
    const navigation = `
        <div class="links">
            <a href="./index.html">
                <img src="images/icons/home_icon_d.png" alt="Home">
                <span>Home</span>
            </a>
            <a href="./blog.html">
                <img src="images/icons/blog_icon_d.png" alt="Blog">
                <span>Blog</span>
            </a>
            <a href="./about.html">
                <img src="images/icons/about_icon_d.png" alt="My Story">
                <span>My Story</span>
            </a>            
            <a href="./resume.html">
                <img src="images/icons/resume_icon_d.png" alt="Resume">
                <span>Resume</span>
            </a>
            <a href="./contact.html">
                <img src="images/icons/envelop_icon_d.png" alt="Contact">
                <span>Contact</span>
            </a>
            <a href="https://www.linkedin.com/in/liorhaim/" target="_blank">
                <img src="images/icons/linkedin_icon_d.png" alt="LinkedIn">
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/LiorHaimGit/" target="_blank">
                <img src="images/icons/github_icon_d.png" alt="GitHub">
                <span>GitHub</span>
            </a>
        </div>
    `;
    
    document.getElementById("navigation").innerHTML = navigation;
});
