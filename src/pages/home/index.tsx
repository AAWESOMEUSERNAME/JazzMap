import React from 'react'
import styles from './index.module.scss'
import { useAppSelector } from '../../common/utils/hooks'

const Home = () => {
    const status = useAppSelector(state => state.musicians.status)
    console.log(status)
    return <div className={styles.container}>home page</div>
}

export default Home