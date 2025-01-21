var typed= new Typed(".txt",{
    strings: ["Full Stack Developer" , "Web Developer"],
    typeSpeed:90,
    backSpeed:90,
    backDelay:1000,
    loop:true
});


document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission
    const message = document.getElementById('submissionMessage');
    message.style.display = 'block'; // Show the message
    message.textContent = 'Thank you for submitting!'; // Set your message
  
    // Optional: Hide the message after 3 seconds
    setTimeout(() => {
      message.style.display = 'none';
    }, 3000);
  });
  