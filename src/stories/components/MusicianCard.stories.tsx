import React from 'react'
import moment from 'moment'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MusicianCard from '../../pages/home/components/MusicianCard'
import photo from '../assets/mock.jpg'

export default {
    title: 'Components/MusicianCard',
    component: MusicianCard,
    parameters: {
        layout: 'padding'
    }
} as ComponentMeta<typeof MusicianCard>

const Template: ComponentStory<typeof MusicianCard> = (args) => <div style={{width:'200px',height: '200px'}}><MusicianCard {...args} /></div>

export const Default = Template.bind({})
Default.args = {
    id: 1,
    photoPath: photo,
    name: 'Louis Armstrong',
    birth: moment('1901-8-4').toDate(),
    death: moment('1971-7-6').toDate(),
    intro: 'test',
} as Musician