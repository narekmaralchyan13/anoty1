import * as React from "react"
import Header from './../header'
import * as styles from "./layoutStyle.module.css"

const Layout = ({ children }) => {

  return (
      <div className={`${styles.content}`}>
            <Header />
          {children}
      </div>
  )
}

export default Layout
