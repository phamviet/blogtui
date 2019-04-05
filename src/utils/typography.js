import Typography from "typography"
import Theme from "typography-theme-fairy-gates"

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
