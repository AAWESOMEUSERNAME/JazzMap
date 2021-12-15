import React from 'react'
import MusicianCard from './MusicianCard'
import styles from './MusicianGroup.module.scss'

export type MusicianGroupProps = {
    data: MusicianBasic[]
}

const MusicianGroup = (props: MusicianGroupProps) => {
    const { data } = props
    return <div className={styles.container}>
        {data.map(item => <MusicianCard key={item.id} {...item} />)}
    </div>
}

export default MusicianGroup