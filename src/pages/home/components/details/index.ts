import React from 'react'
import TestDetail from './TestDetail'

const detailMap = new Map<string, React.FC>()
detailMap.set('test', TestDetail)

export default (name: string) => {
    return detailMap.get(name)
}