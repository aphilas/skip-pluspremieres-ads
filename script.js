let links = document.querySelectorAll('.link-a')

// enable right click on all links

Array.from(links)
.forEach(link => {
  link.addEventListener('contextmenu', _ => {
    let newLink = link.cloneNode(true)
    link.parentNode.replaceChild(newLink, link)
  })
})

let cells = document.querySelectorAll('td')

// skip linkshrink ad 

Array.from(cells)
.filter(cell => cell.innerText == 'DBREE')
.forEach(cell => {
  let dbreeEl = cell.previousElementSibling.children[0]
  let dbreeLink = dbreeEl.pathname.split('=')[1]

  dbreeEl.removeAttribute('target')
  dbreeEl.style.cssText = 'cursor: pointer'
  dbreeEl.setAttribute('title', 'LinkShrink will be skipped')

  dbreeEl.addEventListener('click', event => {
    event.preventDefault()
    window.open(dbreeLink, '_self')
  })
})