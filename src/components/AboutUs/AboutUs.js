import React from 'react';
import styles from './AboutUs.module.scss'
import vector from "../../assets/Vector.svg";
import knife from '../../assets/knife.svg'
import g from '../../assets/G.svg'

const AboutUs = () => {
    return (<div className={styles.box}>
        <div className={styles.subBoxOne}>
            <h1>About Us</h1>
            <object className={styles.object} data={vector} type=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate
                posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <div>
            <button className={styles.btnOne}>Know more</button>
            </div>
        </div>
        <object className={styles.g} data={g} type=""></object>
        <object className={styles.knife} data={knife} type=""></object>
        <div className={styles.subBoxTwo}>
            <h1>Our History</h1>
            <object className={styles.object1} data={vector} type=""/>
            <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse
                interdum mi aliquam In sed odio nec aliquet.</p>
            <button className={styles.btnTwo}>Know more</button>
        </div>
    </div>);
};

export default AboutUs;