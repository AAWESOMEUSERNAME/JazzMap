import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MusicianGroup from '../../pages/home/components/MusicianGroup'
import moment from 'moment'
import mockPhoto from '../../assets/photo/mock.jpg'

export default {
    title: 'Components/MusicianGroup',
    component: MusicianGroup,
    parameters: {
        layout: 'padded' //centered,fullscreen,padded
    }
} as ComponentMeta<typeof MusicianGroup>

const template: ComponentStory<typeof MusicianGroup> = (args) => <MusicianGroup {...args} />
export const Default = template.bind({})
Default.args = {
    data: [
        {
            id: 1,
            photoPath: mockPhoto,
            name: 'name1',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 2,
            photoPath: mockPhoto,
            name: 'name2',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 3,
            photoPath: mockPhoto,
            name: 'name3',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 4,
            photoPath: mockPhoto,
            name: 'name4',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 5,
            photoPath: mockPhoto,
            name: 'name5',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 6,
            photoPath: mockPhoto,
            name: 'name6',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 7,
            photoPath: mockPhoto,
            name: 'name7',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
        {
            id: 8,
            photoPath: mockPhoto,
            name: 'name8',
            birth: moment('1910-1-1','YYYY-MM-DD').toDate(),
            death: moment('1910-1-1','YYYY-MM-DD').toDate(),
            intro: 'intro',
            profileKey: null
        },
    ]
}