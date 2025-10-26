// Initial list of quotes
const quotes = [
  {
    text: 'The best way to predict the future is to invent it.',
    category: 'Motivation',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    category: 'Life',
  },
  {
    text: 'Code is like humor. When you have to explain it, it’s bad.',
    category: 'Programming',
  },
  { text: 'Stay hungry, stay foolish.', category: 'Inspiration' },
]

// Select DOM elements
const quoteDisplay = document.getElementById('quoteDisplay')
const newQuoteButton = document.getElementById('newQuote')

// Function to show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = 'No quotes available. Add a new one!'
    return
  }

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  // Clear existing content and rebuild dynamically
  quoteDisplay.innerHTML = ''

  const quoteText = document.createElement('p')
  quoteText.textContent = `"${randomQuote.text}"`

  const quoteCategory = document.createElement('p')
  quoteCategory.textContent = `— Category: ${randomQuote.category}`
  quoteCategory.style.fontStyle = 'italic'
  quoteCategory.style.color = '#666'

  quoteDisplay.appendChild(quoteText)
  quoteDisplay.appendChild(quoteCategory)
}

// Function to add a new quote dynamically
function addQuote() {
  const newText = document.getElementById('newQuoteText').value.trim()
  const newCategory = document.getElementById('newQuoteCategory').value.trim()

  if (newText === '' || newCategory === '') {
    alert('Please enter both a quote and a category.')
    return
  }

  const newQuote = { text: newText, category: newCategory }
  quotes.push(newQuote)

  document.getElementById('newQuoteText').value = ''
  document.getElementById('newQuoteCategory').value = ''

  alert('Quote added successfully!')
  showRandomQuote() // Optional: show the newly added quote immediately
}

// Event listener for showing a new quote
newQuoteButton.addEventListener('click', showRandomQuote)
