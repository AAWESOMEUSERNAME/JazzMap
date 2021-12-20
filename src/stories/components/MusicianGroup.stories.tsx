import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MusicianGroup from '../../pages/home/components/MusicianGroup'
import moment from 'moment'
import mockPhoto from '../assets/mock.jpg'

export default {
    title: 'Components/MusicianGroup',
    component: MusicianGroup,
    parameters: {
        layout: 'padded' //centered,fullscreen,padded
    }
} as ComponentMeta<typeof MusicianGroup>

const template: ComponentStory<typeof MusicianGroup> = (args) => {
    const [data, setData] = useState(args.data)
    const add = () => {
        const newNode = { ...data[data.length - 1] }
        newNode.id = newNode.id + 1
        const newData = data.slice(0)
        newData.push(newNode)
        setData(newData)
    }
    const remove = () => {
        const i = Math.round((data.length - 1) / 2)
        const newData = data.slice(0)
        newData.splice(i, 1)
        setData(newData)
    }

    console.log('data', data)
    return <>
        <button style={{ position: 'fixed', top: '100px', right: 0, width: '100px', height: '50px', backgroundColor: 'red' }} onClick={remove}>
            减少元素
        </button>
        <button style={{ position: 'fixed', top: 0, right: 0, width: '100px', height: '50px', backgroundColor: 'red' }} onClick={add}>
            增加元素
        </button>
        <MusicianGroup data={data} />
    </>
}
export const Default = template.bind({})
Default.args = {
    data: [
        {
            id: 1,
            photoPath: mockPhoto,
            name: 'name1',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 2,
            photoPath: mockPhoto,
            name: 'name2',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 3,
            photoPath: mockPhoto,
            name: 'name3',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 4,
            photoPath: mockPhoto,
            name: 'name4',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 5,
            photoPath: mockPhoto,
            name: 'name5',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 6,
            photoPath: mockPhoto,
            name: 'name6',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 7,
            photoPath: mockPhoto,
            name: 'name7',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
        {
            id: 8,
            photoPath: mockPhoto,
            name: 'name8',
            birth: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            death: moment('1910-1-1', 'YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: 'test'
        },
    ]
}