import * as React from "react"

import * as styles from "./layoutStyle.module.css"

const Layout = ({ children }) => {

  return (
      <div className={styles.content}>
          {children}
      </div>
  )
}

export default Layout
