import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={classes.main}>
            <div className={classes.part1}>
                <div className={classes.animation1}></div>
                <div className={classes.animation2}></div>
            </div>
            <div className="classes.part2">
                <div className={classes.animation3}></div>
                <div className={classes.animation4}></div>
            </div>
        </div>
    );
};

export default Loader;