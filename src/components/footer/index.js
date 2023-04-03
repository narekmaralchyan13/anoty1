import React from "react";
import logo from './../../images/logo.svg'
import line from './../../images/line.svg'
import verticalLine from './../../images/verticalLine.svg'

import * as styles from './footerStyle.module.css'

const Footer = ()=>{

    return(
       <div className={styles.footer}>
           <img src={logo} alt="logo" className={styles.logo}/>
           <div className={styles.linkGroup}>
               <a href='https://www.facebook.com/profile.php?id=100091197879703' className={styles.link}>Facebook</a>
               <img src={verticalLine} alt="vertical"/>
               <a href='https://www.instagram.com/anoty.am/' className={styles.link}>Instagram</a>
               <img src={verticalLine} alt="vertical"/>
               <a href='https://www.linkedin.com/company/anoty-am/' className={styles.link}>Linkedin</a>
           </div>
           <div className={styles.rights}>
               <img src={line} alt="horizontal" className={styles.rightsLine}/>
               <span>© 2023. Anoty.am. All rights reserved.</span>
           </div>
       </div>
    )
}
export default Footer