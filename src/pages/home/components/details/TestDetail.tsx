import React from 'react'
import styles from './TestDetail.module.scss'

export type TestDetailProps = any

const TestDetail:React.FC<TestDetailProps> = (props) => {
    return <div className={styles.container}>test</div>
}

export default TestDetail