import moment from 'moment'
import React, { CSSProperties } from 'react'
import styles from './MusicianCard.module.scss'

const MusicianCard = (props: MusicianBasic & {style?: CSSProperties, onClick?: () => void}) => {

    const birth = props.birth ? moment(props.birth).format('YYYY/MM/DD') : 'unknown'
    const death = props.death ? moment(props.death).format('YYYY/MM/DD') : undefined

    return <div className={styles.container} style={{
        backgroundImage: `url(${props.photoPath})`,
        backgroundSize: 'cover',
        ...props.style
    }} onClick={() => props.onClick && props.onClick()}>
        <div className={styles.mask}>
            <span className={styles.mask__name}>{props.name}</span><br />
            <span className={styles.mask__date}>{birth} - {death}</span>
        </div>
    </div>
}

export default MusicianCard