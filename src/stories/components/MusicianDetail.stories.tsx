import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MusicianDetail,{MusicianDetailProps} from '../../pages/home/components/MusicianDetail'
import mockPhoto from '../assets/mock.jpg'

export default {
    title: 'Components/MusicianDetail',
    component: MusicianDetail,
    parameters: {
        layout: 'fullscreen' //centered,fullscreen,padded
    }
} as ComponentMeta<typeof MusicianDetail>

const template: ComponentStory<typeof MusicianDetail> = (args) => <MusicianDetail {...args}/>
export const Default = template.bind({})
const defaultProps: MusicianDetailProps = {
    photoPath: mockPhoto,
    intro: 'It a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long intro',
    childrenKey: 'test',
    closeIconStyle: 'light',
    onClose: () => console.log('closed')
}
Default.args = defaultProps