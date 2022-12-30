import React from 'react';
import styles from "./Slider.module.scss"
import food from './../../assets/food.svg'

const Slider = () => {
    return (
        <div className={styles.sliderBlock}>
            <div className={styles.tags}>
                <p>#Bar</p>
                <p>#Gericht</p>
            </div>
            <div className={styles.title}>
                <h3>Chase the new Flavour</h3>
                <h1>The key to Fine dining</h1>
                <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam
                    scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            </div>
            <div>
                <object data={food} type=""/>
            </div>
        </div>
    );
};

export default Slider;