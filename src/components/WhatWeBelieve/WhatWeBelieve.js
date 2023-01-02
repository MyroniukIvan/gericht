import React from 'react';
import styles from './WhatWeBelieve.module.scss'
import hero from './../../assets/pexels-ron-lach-8879653 1.svg'
import vector from './../../assets/Vector.svg'
import {ImQuotesRight} from 'react-icons/im'
import sign from './../../assets/Kevin Luo.svg'

const WhatWeBelieve = () => {
    return (
        <div className={styles.bg}>
            <div>
                <object className={styles.hero} data={hero} type=""></object>
            </div>
            <div className={styles.position}>
                <div><p>Chef’s Word</p>
                    <object data={vector} type=""></object>
                    <h1>What we believe in</h1>
                </div>
                <div>
                    <blockquote>
                        <ImQuotesRight className={styles.quotes}/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                        auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque
                        scelerisque
                        congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit
                        nunc.
                    </blockquote>
                </div>
                <div>
                    <h2>Kevin Luo</h2>
                    <p className={styles.desc}>Chef & Founder</p>
                    <object data={sign} type=""></object>
                </div>
            </div>


        </div>
    )
        ;
};

export default WhatWeBelieve;