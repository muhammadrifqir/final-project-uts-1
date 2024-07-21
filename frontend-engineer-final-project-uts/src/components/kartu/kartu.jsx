import React from "react";
import styles from"../kartu/kartu.css";

function Cards(props) {
    const { status, total, detail }= props;

    return (
        <div className={styles.cards}>
            <a href={detail} target="blank">
                <h3 className={styles.status}> {status} </h3>
                <h2>{total.toLocaleString()}</h2>
            </a>
            
        </div>
    )
}

export default Cards;