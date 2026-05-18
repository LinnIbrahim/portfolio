/**
 * Hidden SVG colour-vision correction filters (daltonisation-style
 * matrices). Applied page-wide via `filter: url(#cb-…)` from CSS so a
 * colour-blind visitor can pick the remap that helps them most.
 * Kept out of the filtered subtree so the SVG itself is unaffected.
 */
export default function ColorFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <defs>
        {/* Protanopia (red-deficient) correction */}
        <filter id="cb-protanopia" colorInterpolationFilters="linearRGB">
          <feColorMatrix
            type="matrix"
            values="0 2.02344 -2.52581 0 0
                    0 1        0       0 0
                    0 0        1       0 0
                    0 0        0       1 0"
          />
        </filter>

        {/* Deuteranopia (green-deficient) correction */}
        <filter id="cb-deuteranopia" colorInterpolationFilters="linearRGB">
          <feColorMatrix
            type="matrix"
            values="1        0 0       0 0
                    0.494207 0 1.24827 0 0
                    0        0 1       0 0
                    0        0 0       1 0"
          />
        </filter>

        {/* Tritanopia (blue-deficient) correction */}
        <filter id="cb-tritanopia" colorInterpolationFilters="linearRGB">
          <feColorMatrix
            type="matrix"
            values="1         0        0 0 0
                    0         1        0 0 0
                    -0.395913 0.801109 0 0 0
                    0         0        0 1 0"
          />
        </filter>
      </defs>
    </svg>
  )
}
