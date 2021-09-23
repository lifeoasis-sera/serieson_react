import styles from './MovieCard.module.css'
import Quality from "../Icon/Quality";
import SubTitle from "../Icon/SubTitle";
import CircleIcon from "../Icon";
import Youth from "../Icon/Youth";

function MovieCard({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <div className={styles[`wrap`]}>
                {obj['hot']
                    ? <CircleIcon text={'HOT'} diameter={'40px'} fontSize={'10px'}/>
                    : obj['event']
                        ? <CircleIcon text={'Event'} diameter={'40px'} fontSize={'10px'}/>
                        : <></>
                }

                <a className={'link'} href={obj['url']}>
                    <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
                    <div className={styles[`title`]}>
                        <Quality text={obj.type}/>
                        {obj["subTitle"] ? <SubTitle/> : <></>}
                        {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                        <span className={styles['main-title']}>{obj["mainTitle"]}</span>
                    </div>
                </a>

                <div className={styles[`grad`]}>
                    <span>별 개수 </span>
                    <span>{obj["grad"]}</span>
                </div>
                <div className={styles[`price`]}>
                    <span>{obj["priceType"]}</span>
                    <span>{obj["price"]}</span>
                </div>
            </div>
        </section>
    )

}

export default MovieCard;