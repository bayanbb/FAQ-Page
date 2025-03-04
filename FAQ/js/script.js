document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const accordion = this.parentElement;
    const content = accordion.querySelector('.accordion-content');
    const arrow = accordion.querySelector('i'); 

    content.style.display = content.style.display === 'block' ? 'none' : 'block';

    accordion.classList.toggle('active');

    if (accordion.classList.contains('active')) {
      arrow.classList.remove('hgi-arrow-down-01');
      arrow.classList.add('hgi-arrow-up-01'); 
    } else {
      arrow.classList.remove('hgi-arrow-up-01');
      arrow.classList.add('hgi-arrow-down-01'); 
    }


    
  });
});



let yesCount = 0; 
let noCount = 100; 

const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');
const statsText = document.getElementById('stats');

function updateStats() {
    const total = yesCount + noCount; 
    const yesPercentage = ((yesCount / total) * 100).toFixed(1); 
    statsText.textContent = `${yesPercentage}% من المستخدمين قالوا نعم من ${total} تعليقًا.`; 
}


yesButton.addEventListener('click', () => {
    yesCount++; 
    yesButton.classList.add('clicked');
    noButton.classList.remove('clicked'); 
    updateStats(); 
});


noButton.addEventListener('click', () => {
    noCount++; 
    noButton.classList.add('clicked'); 
    yesButton.classList.remove('clicked'); 
    updateStats(); 
});

updateStats();


