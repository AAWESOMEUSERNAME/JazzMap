import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import MusicianCard from './MusicianCard'
import MusicianDetail from './MusicianDetail'
import styles from './MusicianGroup.module.scss'

export type MusicianGroupProps = {
    data: MusicianBasic[]
}

const AnimatedMusicianCard = animated(MusicianCard)

const MusicianGroup = (props: MusicianGroupProps) => {
    const { data } = props
    const [detailItem, setItem] = useState<MusicianBasic | null>()

    const transition = useTransition(data, {
        config: {duration: 2000},
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return <div className={styles.container}>
        {/* {data.map(item => <MusicianCard key={item.id} {...item} onClick={() => {
            console.log('click')
            item.profileKey && setItem(item)
        }} />)} */}
        {transition(({ opacity }, item) => (<AnimatedMusicianCard style={{ opacity: opacity }} key={item.id} {...item} onClick={() => {
            console.log('click')
            item.profileKey && setItem(item)
        }} />))}
        {detailItem && detailItem.profileKey && <MusicianDetail
            photoPath={detailItem.photoPath}
            intro={detailItem.intro || ''}
            childrenKey={detailItem.profileKey}
            closeIconStyle={'light'}
            onClose={() => setItem(null)}
        />}
    </div>
}

export default MusicianGroup