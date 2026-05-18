import { useEffect, useRef, useState } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

// Custom event other components (e.g. the footer paw) dispatch to
// summon the pup without knowing about this component.
export const WOOF = 'lin:woof'
export function summonPup() {
  window.dispatchEvent(new CustomEvent(WOOF))
}

export default function EasterEggs() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const lastFocus = useRef(null)

  // One-time styled console hello — a nook for the curious dev.
  useEffect(() => {
    const big = 'font:600 15px/1.5 Georgia,serif;color:#5c6a58'
    const soft = 'color:#6b665c'
    /* eslint-disable no-console */
    console.log('%cBuilt for the one, not the aggregate.', big)
    console.log(
      '%cYou went looking under the hood — that is very 1% of you.\n' +
        'Psst: try the Konami code. ↑ ↑ ↓ ↓ ← → ← → B A',
      soft,
    )
    /* eslint-enable no-console */
  }, [])

  // Konami sequence + the summon event.
  useEffect(() => {
    let i = 0
    const onKey = (e) => {
      const want = KONAMI[i]
      if (e.key.toLowerCase() === want.toLowerCase()) {
        i += 1
        if (i === KONAMI.length) {
          i = 0
          setOpen(true)
        }
      } else {
        i = e.key === KONAMI[0] ? 1 : 0
      }
    }
    const onWoof = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener(WOOF, onWoof)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(WOOF, onWoof)
    }
  }, [])

  // Focus management + Esc to close.
  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      lastFocus.current?.focus?.()
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="egg-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="egg-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div className="egg-card">
        <figure className="egg-mascot">
          <img
            src="/mascot.jpg"
            alt="A tiny amber glass dog — the lost-page guardian from emetour.com"
            width="1100"
            height="733"
          />
        </figure>
        <div className="egg-body">
          <p className="egg-kicker">A nook · emetour.com/404</p>
          <h2 id="egg-title">You found the lost-page pup.</h2>
          <p>
            This little glass dog guards every wrong turn on{' '}
            <a href="https://emetour.com" target="_blank" rel="noreferrer">
              emetour.com
            </a>
            . He’s proof that even a 404 deserves to be designed for a
            person — the one who got lost, not the average who didn’t.
          </p>
          <button
            ref={closeRef}
            type="button"
            className="btn"
            onClick={() => setOpen(false)}
          >
            Good boy — take me back
          </button>
        </div>
      </div>
    </div>
  )
}
