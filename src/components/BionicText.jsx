import { Fragment } from 'react'
import { useA11y } from '../a11y/A11yProvider'

// Bold the leading fixation point of each word — shorter words get a
// single letter, longer words ~40%. Punctuation/numbers pass through.
function fixation(len) {
  if (len <= 3) return 1
  return Math.ceil(len * 0.4)
}

function transform(text) {
  // Keep whitespace runs so spacing is preserved exactly.
  const tokens = text.split(/(\s+)/)
  return tokens.map((tok, i) => {
    if (!tok || /^\s+$/.test(tok)) return <Fragment key={i}>{tok}</Fragment>

    const m = tok.match(/^([^\p{L}]*)(\p{L}[\p{L}'’-]*)([\s\S]*)$/u)
    if (!m) return <Fragment key={i}>{tok}</Fragment>

    const [, lead, word, tail] = m
    const n = fixation(word.length)
    return (
      <Fragment key={i}>
        {lead}
        <b className="bionic-fix">{word.slice(0, n)}</b>
        {word.slice(n)}
        {tail}
      </Fragment>
    )
  })
}

/**
 * Renders prose plainly, or with bionic-reading emphasis when the
 * visitor has enabled it. Use only for body copy, not headings.
 */
export default function BionicText({ children }) {
  const { bionic } = useA11y()
  if (typeof children !== 'string' || !bionic) return children
  return transform(children)
}
