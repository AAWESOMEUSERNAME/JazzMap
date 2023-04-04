import React, { useState } from 'react'
import styles from './MusicianDetail.module.scss'
import detailMap from './details'
import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import { commonSpringConfig } from '../../../common/constants/animate'

export type CloseIconStyle = 'light' | 'dark'
export type MusicianDetailProps = {
    photoPath: string
    intro: string
    childrenKey: string
    background?: string
    color?: string
    closeIconStyle: CloseIconStyle
    onClose: () => void
}

const MusicianDetail: React.FC<MusicianDetailProps> = ({
    photoPath, intro, childrenKey, background = '#2d221f', color = '#f7c441', closeIconStyle, onClose
}) => {
    const [show, setShow] = useState(true)
    const DetailContent = detailMap(childrenKey)

    const containerSpringRef = useSpringRef()
    const containerSpring = useSpring({
        from: { left: '-100%' },
        left: '0%',
        reverse: !show,
        ref: containerSpringRef,
        config: commonSpringConfig,
        onRest: () => !show && onClose && onClose()
    })
    const siderSpringRef = useSpringRef()
    const siderSpring = useSpring({
        from: { transform: '-100%' },
        transform: '0%', reset: true,
        reverse: !show,
        config: commonSpringConfig,
        ref: siderSpringRef
    })
    const contentSpringRef = useSpringRef()
    const contentSpring = useSpring({
        from: { transform: '-100%' },
        transform: '0%',
        opacity: 1,
        reverse: !show,
        config: commonSpringConfig,
        ref: contentSpringRef
    })

    useChain([containerSpringRef, siderSpringRef, contentSpringRef], show ? [0, 0, 0.2] : [0, 0, 0])

    return <animated.div className={styles.container} style={{ left: containerSpring.left }}>
        <animated.div className={styles.sider} style={{
            transform: siderSpring.transform.to(t => `translateX(${t})`),
            background: background,
            color: color
        }}>
            <div className={styles.sider__header} style={{ backgroundImage: `url(${photoPath})` }} />
            <div className={styles.sider__text}>{intro}</div>
        </animated.div>
        <animated.div className={styles.content} style={{
            transform: contentSpring.transform.to(t => `translateX(${t})`)
        }}>
            <div className={closeIconStyle === 'dark' ? styles.close_dark : styles.close_light} onClick={() => setShow(false)} />
            {DetailContent && <DetailContent />}
        </animated.div>
    </animated.div>
}

export default MusicianDetail