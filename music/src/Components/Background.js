import React from "react";
import styles from './Background.module.css';
import CardComponent from "./CardComponent";





export default function Background() {
    return (
        <>
            <div className={styles.background} >
                <CardComponent></CardComponent>
            </div>
        </>
    )
}