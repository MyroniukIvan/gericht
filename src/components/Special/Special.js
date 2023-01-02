import React from 'react';
import styles from './Special.module.scss'
import vector from './../../assets/Vector.svg'
import bg from './../../assets/3596233 1.svg'
import rect from './../../assets/Rectangle 14 (1).svg'

const Special = () => {
    return (<div className={styles.header}>
        <div className={styles.head}>
            <h3>Menu that fits you palatte</h3>
            <object className={styles.object} data={vector} type=""></object>
            <h1>Today’s Special</h1>
        </div>
        <div className={styles.flex}>
            <div className={styles.container}>
                <h2>Wine & Beer</h2>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Chapel Hill Shiraz</p>
                        <div>AU | Bottle</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Catena Malbec</p>
                        <div>AR | Bottle</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>La Vieille Rosé</p>
                        <div>FR | 750 ml</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Rhino Pale Ale</p>
                        <div>CA | 750 ml</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Irish Guinness</p>
                        <div>IE | 750 ml</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
            </div>
            <div>
                <object className={styles.bg} data={bg} type=""></object>
            </div>
            <div className={styles.container}>
                <h2>Cocktails</h2>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Aperol Spritz</p>
                    <div>Aperol | Villa Marchesi prosecco | soda | 30ml</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Dark 'N' Stormy</p>
                        <div>Dark rum | Ginger beer | Slice of lime.</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Daiquiri</p>
                        <div>Rum | Citrus juice | Sugar</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Old Fashioned</p>
                    <div>Bourbon | Brown sugar | Angostura Bitters</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
                <div className={styles.position}>
                    <div className={styles.div}>
                        <p>Negroni</p>
                        <div>Gin | Sweet Vermouth | Campari | Orange garnish</div>
                    </div>
                    <object data={rect} type=""></object>
                    <text>$56</text>
                </div>
            </div>
        </div>
        <button className={styles.btn}>Know more</button>
    </div>);
};

export default Special;