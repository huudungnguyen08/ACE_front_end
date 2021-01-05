// JavaScript Document
function getData() {
  return fetch('https://www.acefrontend.com/c/critter/feed.json')
    .then(res => res.json())
    .catch(err => console.log('handle this error:', err))
}

function renderDate(dateString) {
  const date = new Date(dateString)
  const month = date.toLocaleString( { month })
  const day = date.getDate()
  return `${month} ${day}`
}

function createTemplate(cardData) {
  const card = document.createElement('article')
  card.className = 'creet'
  card.innerHTML = `
    <div class="creet__avatar" style="background-image: url(${cardData.user.avatar});">
    </div>
    <div>
      <header class="creet__header">
        <span class="creet__username">@${cardData.user.username}</span>
        <span>&#183;</span>
        <span>${renderDate(cardData.created_at)}</span>
      </header>
      <div class="creet__body">${cardData.text}</div>
      <footer class="creet__footer">
        Likes: ${cardData.likes}
      </footer> 
    </div>
  `
  return card
}

function render(container, templates) {
  const d = document.createDocumentFragment()
  templates.forEach(template => d.appendChild(template))
  container.appendChild(d)
}

function init() {
  const container = document.getElementById('creets')
  getData()
    .then(json => json.feed.map(createTemplate))
    .then(templates => render(container, templates))
}

init()