
import React from 'react'
import cx from 'classnames'
import styles from './logo.css'
import { AnimationComponent } from 'light-ui'

const _LogoText = (props) => {
  const {
    status,
    onTransitionEnd,
    className,
    theme = 'light',
    text = 'hacknical',
    onClick = Function.prototype
  } = props

  return (
    <div
      className={cx(
        styles.logoContainer,
        className,
        styles[`logo_${theme}`],
        styles[`logoContainer-${status}`]
      )}
      onClick={onClick}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.logoFront}>{text}</div>
      <div className={styles.logoBack}>{text}</div>
    </div>
  )
}

const LogoText = props => (
  <AnimationComponent>
    <_LogoText {...props} />
  </AnimationComponent>
)

export default LogoText
