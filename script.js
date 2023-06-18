// Define vocabulary words and their translations
const vocabulary = [
  { word: 'Hello', translation: { en: 'Hello', es: 'Hola', fr: 'Bonjour', de: 'Hallo' } },
  { word: 'Goodbye', translation: { en: 'Goodbye', es: 'Adiós', fr: 'Au revoir', de: 'Auf Wiedersehen' } },
  // Add more words and translations as needed
];

let currentWordIndex = 0;

// Display a random word and its options
function displayWord() {
  const wordElement = document.getElementById('word');
  const optionsElement = document.getElementById('options');
  const word = vocabulary[currentWordIndex].word;
  const translations = vocabulary[currentWordIndex].translation;

  wordElement.textContent = word;
  optionsElement.innerHTML = '';

  // Display the translation options
  for (const lang in translations) {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = translations[lang];
    optionElement.dataset.lang = lang;
    optionElement.addEventListener('click', checkAnswer);
    optionsElement.appendChild(optionElement);
  }
}

// Check if the selected translation is correct
function checkAnswer(event) {
  const selectedLang = event.target.dataset.lang;
  const translations = vocabulary[currentWordIndex].translation;

  if (selectedLang === 'en') {
    alert('Correct!');
  } else {
    alert(`Incorrect. The correct translation is: ${translations.en}`);
  }

  currentWordIndex++;
  if (currentWordIndex >= vocabulary.length) {
    currentWordIndex = 0;
  }

  displayWord();
}

// Event listener for the next word button
document.getElementById('nextBtn').addEventListener('click', displayWord);

// Initial display
displayWord();
