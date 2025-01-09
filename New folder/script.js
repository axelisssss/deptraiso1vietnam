// Show and hide sections
function showSection(section) {
    document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
  }
  
  const words = [
    {
      word: "Inspiration",
      meaning: "A sudden brilliant idea or feeling.",
      example: "She found her inspiration in the beauty of nature.",
      audio: "inspiration.mp3",
      
    },
    {
      word: "Environment",
      meaning: "the air, water, and land in or on which people, animals, and plants live",
      example: "We're not doing enough to protect the environment from pollution.",
      audio: "environment.mp3",
       
    },
    {
      word: "Assimilate",
      meaning: "to become part of a group, country, society, etc., or to make someone or something become part of a group, country, society",
      example: "You shouldn't expect immigrants to assimilate into an alien culture immediately",
      audio: "assimilate.mp3",
      
    },
    {
      word: "Kiddo",
      meaning: "used as a friendly way of speaking to a child or young person, especially one you know well",
      example: "What a cute kiddo you have",
      audio: "kiddo.mp3",
      
    },
    
  ];
  
  function loadWordOfTheDay() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word-title').textContent = randomWord.word;
    document.getElementById('word-meaning').textContent = `Meaning: ${randomWord.meaning}`;
    document.getElementById('word-example').textContent = `Example: ${randomWord.example}`;
    
    document.getElementById('word-audio').src = randomWord.audio;
  } 
  
  // IELTS Practice
  let timer;
  function startListening() {
    document.getElementById('practice-title').textContent = "Listening Practice";
    document.getElementById('practice-content').textContent = "Audio content goes here...";
    document.getElementById('result').textContent = "";
    startTimer(5); // Set timer for 5 minutes
    document.getElementById('ielts-docs').style.display = 'none';
  }
  
  function startReading() {
    document.getElementById('practice-title').textContent = "Reading Practice";
    document.getElementById('practice-content').textContent = "Reading content goes here...";
    document.getElementById('result').textContent = "";
    startTimer(10); // Set timer for 10 minutes
    document.getElementById('ielts-docs').style.display = 'none';
  }
  
  function startTimer(minutes) {
    const now = Date.now();
    const endTime = now + minutes * 60 * 1000;
    timer = setInterval(() => {
      const remaining = endTime - Date.now();
      if (remaining <= 0) {
        clearInterval(timer);
        document.getElementById('timer').textContent = "Time's up!";
      } else {
        document.getElementById('timer').textContent = `Time left: ${Math.ceil(remaining / 1000)} seconds`;
      }
    }, 1000);
  }
  function showIeltsDocs() {
    // Ẩn phần practice-area nếu cần
    document.getElementById('practice-area').style.display = 'none';
    
    // Hiển thị phần iframe chứa tài liệu IELTS
    document.getElementById('ielts-docs').style.display = 'block';
  }

  // Vocabulary by Topic
  function showTopic(topic) {
    const topics = {
      fruits: ["Apple", "Banana", "Cherry"],
      animals: ["Dog", "Cat", "Elephant"]
    };
  
    const container = document.getElementById('topic-content');
    container.innerHTML = "";
    topics[topic].forEach(item => {
      const img = document.createElement('img');
      img.src = `images/${item.toLowerCase()}.jpg`; // Assuming image names match item names
      img.alt = item;
      img.title = item;
      img.onclick = () => alert(`This is a ${item}`);
      container.appendChild(img);
    });
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", loadWordOfTheDay);
  