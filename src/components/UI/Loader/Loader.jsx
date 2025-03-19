import React from 'react'
import classes from './Loader.module.css'
const Loader = () => {
  return (
    <div className={classes.loader}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
    </div>
    )
}

export default Loader