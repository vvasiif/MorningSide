function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function switchDivs() {
    const switchMonthly = document.getElementById('switchMonthly');
    const switchYearly = document.getElementById('switchYearly');
    const fullTimeMembers = document.getElementById('full-time-members');
    const partTimeMembers = document.getElementById('part-time-members');
    const dummyDiv1 = document.getElementById('full-time-list');
    const dummyDiv2 = document.getElementById('part-time-list');

    switchMonthly.addEventListener('click', () => {
        fullTimeMembers.style.display = 'block';
        partTimeMembers.style.display = 'none';
        dummyDiv1.style.display = 'none';
        dummyDiv2.style.display = 'block';
        dummyDiv1.style.display = 'block';
        dummyDiv2.style.display = 'none';
    });

    switchYearly.addEventListener('click', () => {
        fullTimeMembers.style.display = 'none';
        partTimeMembers.style.display = 'block';
        dummyDiv1.style.display = 'block';
        dummyDiv2.style.display = 'none';
        dummyDiv1.style.display = 'none';
        dummyDiv2.style.display = 'block';
    });
}

switchDivs();

function toggleDropdown() {
    var dropdownMenu = document.querySelector(".dropdown-menu");
    var dropImage = document.querySelector(".nav-dropdown img");
  
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
      dropImage.style.transform = "rotate(0deg)";
      dropImage.style.filter = "none";
    } else {
      dropdownMenu.style.display = "block";
      dropImage.style.transform = "rotate(-180deg)";
      dropImage.style.filter = "hue-rotate(-90deg)";
      dropImage.style.transition = "transform 0.3s ease-in-out";
    }
  }
  