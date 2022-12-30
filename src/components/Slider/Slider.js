import React from 'react';
import styles from "./Slider.module.scss"
import food from './../../assets/food.svg'
import vector from './../../assets/Vector.svg'
import vector8 from './../../assets/Vector 8.svg'

const Slider = () => {
    return (<div className={styles.sliderBlock}>
        <div className={styles.tags}>
            <p>#Bar</p>
            <p>#Gericht</p>
        </div>
        <div className={styles.title}>
            <h3>Chase the new Flavour</h3>
            <object data={vector} type=""/>
            <h1>The key to Fine dining</h1>
            <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam
                scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className={styles.btn}>Explore menu</button>
        </div>
        <div>
            <object className={styles.object} data={food} type=""/>
        </div>
        <a href={'#top'}>
            <div className={styles.scroll}>
                <object data={vector8} type=""/>
                <p>Scroll</p>
            </div>
        </a>
    </div>);
};

export default Slider;