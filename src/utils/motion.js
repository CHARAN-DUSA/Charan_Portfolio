export function fadeUp(targets, trigger, options = {}) {
  if (!window.gsap || !window.ScrollTrigger) return
  window.gsap.from(targets, {
    opacity: 0, y: options.y ?? 60,
    duration: options.duration ?? 0.8, stagger: options.stagger ?? 0,
    ease: options.ease ?? 'power3.out', immediateRender: false,
    scrollTrigger: { trigger, start: options.start ?? 'top 80%', toggleActions: 'play reverse play reverse' },
  })
}
export function fadeLeft(targets, trigger, options = {}) {
  if (!window.gsap || !window.ScrollTrigger) return
  window.gsap.from(targets, {
    opacity: 0, x: options.x ?? -60,
    duration: options.duration ?? 0.8, ease: options.ease ?? 'power3.out', immediateRender: false,
    scrollTrigger: { trigger, start: options.start ?? 'top 80%', toggleActions: 'play reverse play reverse' },
  })
}
export function fadeRight(targets, trigger, options = {}) {
  if (!window.gsap || !window.ScrollTrigger) return
  window.gsap.from(targets, {
    opacity: 0, x: options.x ?? 60,
    duration: options.duration ?? 0.8, ease: options.ease ?? 'power3.out', immediateRender: false,
    scrollTrigger: { trigger, start: options.start ?? 'top 75%', toggleActions: 'play reverse play reverse' },
  })
}
export function waitForGSAP(cb) {
  const id = setInterval(() => {
    if (window.gsap && window.ScrollTrigger) {
      clearInterval(id)
      window.gsap.registerPlugin(window.ScrollTrigger)
      cb()
    }
  }, 50)
}
