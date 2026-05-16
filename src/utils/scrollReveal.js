const revealSelector = [
  '[data-reveal]',
  'main section',
  '.stat-card',
  '.service-card',
  '.project-card',
  '.product-card',
  '.masonry-item'
].join(',')

let observer

export function refreshScrollReveal() {
  document.querySelectorAll('img').forEach((image, index) => {
    image.decoding = 'async'
    if (!image.hasAttribute('alt')) {
      image.alt = ''
      image.setAttribute('aria-hidden', 'true')
    }
    if (!image.hasAttribute('loading') && index > 1) {
      image.loading = 'lazy'
    }
  })

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll(revealSelector).forEach((element) => {
      element.classList.add('reveal-visible')
    })
    return
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px 0px' }
    )
  }

  document.querySelectorAll(revealSelector).forEach((element, index) => {
    if (element.classList.contains('reveal-visible')) return
    element.classList.add('reveal-item')
    element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`)
    observer.observe(element)
  })
}
