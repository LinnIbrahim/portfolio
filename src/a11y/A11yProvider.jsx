import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react'

/**
 * Accessibility state — text scale, colour-vision filter, high
 * contrast, and bionic reading. Persisted to localStorage so a
 * visitor's choices survive reloads.
 */

const STORAGE_KEY = 'a11y-prefs-v1'

export const FONT_STEPS = [0.9, 1, 1.15, 1.3, 1.5]

export const COLOR_MODES = [
  { id: 'off', label: 'Off' },
  { id: 'protanopia', label: 'Protanopia' },
  { id: 'deuteranopia', label: 'Deuteranopia' },
  { id: 'tritanopia', label: 'Tritanopia' },
  { id: 'grayscale', label: 'Grayscale' },
]

const DEFAULTS = {
  fontScale: 1,
  colorMode: 'off',
  contrast: false,
  bionic: false,
}

function readStored() {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch {
    return DEFAULTS
  }
}

const A11yContext = createContext(null)

export function useA11y() {
  const ctx = useContext(A11yContext)
  if (!ctx) throw new Error('useA11y must be used within <A11yProvider>')
  return ctx
}

export function A11yProvider({ children }) {
  const [prefs, setPrefs] = useState(readStored)

  // Persist + reflect font scale onto the document root.
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--a11y-font-scale',
      String(prefs.fontScale),
    )
  }, [prefs.fontScale])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      /* storage unavailable — non-fatal */
    }
  }, [prefs])

  const set = useCallback(
    (patch) => setPrefs((p) => ({ ...p, ...patch })),
    [],
  )
  const reset = useCallback(() => setPrefs(DEFAULTS), [])

  const pageClassName = [
    'page',
    prefs.contrast ? 'a11y-contrast' : '',
    prefs.colorMode !== 'off' ? `cb-${prefs.colorMode}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  const value = {
    ...prefs,
    set,
    reset,
    pageClassName,
    isDefault:
      prefs.fontScale === DEFAULTS.fontScale &&
      prefs.colorMode === DEFAULTS.colorMode &&
      prefs.contrast === DEFAULTS.contrast &&
      prefs.bionic === DEFAULTS.bionic,
  }

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>
}
