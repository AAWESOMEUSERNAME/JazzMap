import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'
import MusicianCard from './MusicianCard'
import MusicianDetail from './MusicianDetail'
import styles from './MusicianGroup.module.scss'

export type MusicianGroupProps = {
    data: MusicianBasic[]
}

const CARD_SIZE = 200
const CARD_MARGIN = 2

const MusicianGroup = (props: MusicianGroupProps) => {
    const { data } = props
    const [detailItem, setItem] = useState<MusicianBasic | null>()

    const transitions = useTransition(data, {
        config: {
            mass: 20,
            tension: 210,
            friction: 85,
            clamp: true
        },
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        keys: item => item.id
    })

    return <div className={styles.container}>
        {transitions(({ opacity }, item) => (
            <animated.div className={styles.card} key={item.id} style={{
                opacity: opacity,
                width: opacity.to({ range: [0, 0.5], output: [0, CARD_SIZE], extrapolate: 'clamp' }).to(w => w + 'px'),
                height: opacity.to({ range: [0, 0.5], output: [0, CARD_SIZE], extrapolate: 'clamp' }).to(w => w + 'px'),
                margin: opacity.to([0, 1], [0, CARD_MARGIN]).to(m => m + 'px')
            }}>
                <MusicianCard {...item} onClick={() => {
                    item.profileKey && setItem(item)
                }} />
            </animated.div>
        ))}
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