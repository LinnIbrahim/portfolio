import { useEffect, useRef, useState, useId } from 'react'
import { useA11y, FONT_STEPS, COLOR_MODES } from '../a11y/A11yProvider'

function AccessIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="4" r="2" fill="currentColor" />
      <path
        d="M12 7v6m0 0-3 6m3-6 3 6M5 8c2.3 1 4.5 1.4 7 1.4S16.7 9 19 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Switch({ label, hint, checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`a11y-switch ${checked ? 'on' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <span className="a11y-switch-text">
        <span className="a11y-switch-label">{label}</span>
        {hint && <span className="a11y-switch-hint">{hint}</span>}
      </span>
      <span className="a11y-track" aria-hidden="true">
        <span className="a11y-knob" />
      </span>
    </button>
  )
}

export default function AccessibilityPanel() {
  const a11y = useA11y()
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const fabRef = useRef(null)
  const headingRef = useRef(null)
  const titleId = useId()

  // Focus into the panel on open; restore focus to the trigger on close.
  useEffect(() => {
    if (open) headingRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        fabRef.current?.focus()
      }
    }
    const onClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !fabRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div className="a11y-root">
      <button
        ref={fabRef}
        type="button"
        className="a11y-fab"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={
          open ? 'Close accessibility options' : 'Open accessibility options'
        }
        onClick={() => setOpen((o) => !o)}
      >
        <AccessIcon />
      </button>

      {open && (
        <div
          ref={panelRef}
          className="a11y-panel"
          role="dialog"
          aria-labelledby={titleId}
        >
          <div className="a11y-head">
            <h2 id={titleId} ref={headingRef} tabIndex={-1}>
              Accessibility
            </h2>
            <button
              type="button"
              className="a11y-close"
              aria-label="Close accessibility options"
              onClick={() => {
                setOpen(false)
                fabRef.current?.focus()
              }}
            >
              ✕
            </button>
          </div>

          {/* Text size */}
          <fieldset className="a11y-group">
            <legend>Text size</legend>
            <div className="a11y-seg" role="group" aria-label="Text size">
              {FONT_STEPS.map((step, i) => (
                <button
                  key={step}
                  type="button"
                  aria-pressed={a11y.fontScale === step}
                  aria-label={`${Math.round(step * 100)} percent text size`}
                  className={a11y.fontScale === step ? 'sel' : ''}
                  style={{ fontSize: `${0.78 + i * 0.14}rem` }}
                  onClick={() => a11y.set({ fontScale: step })}
                >
                  A
                </button>
              ))}
            </div>
          </fieldset>

          {/* Colour vision */}
          <fieldset className="a11y-group">
            <legend>Colour vision filter</legend>
            <div
              className="a11y-chips"
              role="group"
              aria-label="Colour vision filter"
            >
              {COLOR_MODES.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={a11y.colorMode === m.id}
                  className={`a11y-chip ${
                    a11y.colorMode === m.id ? 'sel' : ''
                  }`}
                  onClick={() => a11y.set({ colorMode: m.id })}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Toggles */}
          <div className="a11y-group">
            <Switch
              label="High contrast"
              hint="Darker text, stronger borders, underlined links"
              checked={a11y.contrast}
              onChange={(v) => a11y.set({ contrast: v })}
            />
            <Switch
              label="Bionic reading"
              hint="Bold word starts to guide the eye"
              checked={a11y.bionic}
              onChange={(v) => a11y.set({ bionic: v })}
            />
          </div>

          <button
            type="button"
            className="a11y-reset"
            disabled={a11y.isDefault}
            onClick={a11y.reset}
          >
            Reset to defaults
          </button>
        </div>
      )}
    </div>
  )
}
