import React from 'react';
import styles from "./Video.module.scss"
import video from './../../assets/Mask Group.svg'
import {AiOutlinePlayCircle} from 'react-icons/ai'
const Video = () => {
    return (
        <div className={styles.video}>
            <object className={styles.vid} data={video} type=""></object>
            <AiOutlinePlayCircle className={styles.play}/>
        </div>
    );
};

export default Video;