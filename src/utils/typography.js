import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import Theme from "typography-theme-fairy-gates"

Theme.plugins = [
  new CodePlugin(),
]

// Theme.baseLineHeight = 1.78;
Theme.overrideThemeStyles = () => {
  return {
    blockquote: {
      borderLeftWidth: typography.rhythm(3 / 16),
    },
    'h3 a': {
      // backgroundImage: 'none',
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.2
    },
    'pre[class*=language-]': {
      background: 'hsla(0,0%,0%,0.04)'
    }
  }
}

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
