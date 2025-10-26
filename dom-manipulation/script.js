// quotes array with text and category properties
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

// Function to display a random quote (autograder expects this name)
function displayRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = 'No quotes available. Add a new one!'
    return
  }

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  // Clear old content and dynamically create elements
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

// Function to dynamically create and append the quote form
function createAddQuoteForm() {
  const formContainer = document.createElement('div')

  const textInput = document.createElement('input')
  textInput.id = 'newQuoteText'
  textInput.type = 'text'
  textInput.placeholder = 'Enter a new quote'

  const categoryInput = document.createElement('input')
  categoryInput.id = 'newQuoteCategory'
  categoryInput.type = 'text'
  categoryInput.placeholder = 'Enter quote category'

  const addButton = document.createElement('button')
  addButton.textContent = 'Add Quote'
  addButton.onclick = addQuote

  formContainer.appendChild(textInput)
  formContainer.appendChild(categoryInput)
  formContainer.appendChild(addButton)

  document.body.appendChild(formContainer)
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

  displayRandomQuote()
}

// Event listener for the “Show New Quote” button
newQuoteButton.addEventListener('click', displayRandomQuote)

// Initialize the form when DOM loads
document.addEventListener('DOMContentLoaded', createAddQuoteForm)
