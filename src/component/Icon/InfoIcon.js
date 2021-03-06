import styles from './InfoIcon.module.css'

export function Quality() {
    return <span id={styles['HD']} className={styles['ico_mv_lst6']}/>
}

export function Rank({num}) {
    const positionPxNum = (400 + num * 20 + 4) * (-1)
    return <span id={styles['rank']} className={styles['sp_home_new_v7']}
                 style={{backgroundPosition: `${positionPxNum}px -521px`}}/>
}

export function SubTitle() {
    return <span id={styles['subTitle']} className={styles['ico_mv_lst6']}/>;
}

export function Youth() {
    return <span id={styles['youth']} className={styles['spr_adult_ico_v2']}/>;
}

export function Circle({name, size}) {
    if (size > 45) {
        return <span id={styles[name]} className={`${styles['sp_home_new_v7']} ${styles['circle']}`}/>
    } else {
        return <span className={styles['zoom-out']}>
            <span id={styles[name]} className={`${styles['sp_home_new_v7']} ${styles['circle']}`}/>
        </span>
    }
}

export function Star({bolColor = false, percent = 0}) {
    if (bolColor) {
        return <span id={styles['starRed']}
                     className={`${styles['sp_home_new_v7']} ${styles['star']}`}
                     style={{width: `${8 * percent}px`}}/>
    } else {
        return <span id={styles['starGrey']} className={`${styles['sp_home_new_v7']} ${styles['star']}`}/>
    }
}