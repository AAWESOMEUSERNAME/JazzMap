import moment from 'moment'
import React from 'react'
import styles from './MusicianCard.module.scss'

const { container, mask } = styles

const MusicianCard = (props: Musician) => {

    const birth = props.birth ? moment(props.birth).format('YYYY/MM/DD') : 'unknown'
    const death = props.death ? moment(props.death).format('YYYY/MM/DD') : undefined

    return <div className={container} style={{
        backgroundImage: `url(${props.photoPath})`,
        backgroundSize: 'cover'
    }}>
        <div className={mask}>
            <span className={styles.mask__name}>{props.name}</span><br />
            <span className={styles.mask__date}>{birth} - {death}</span>
        </div>
    </div>
}

export default MusicianCard