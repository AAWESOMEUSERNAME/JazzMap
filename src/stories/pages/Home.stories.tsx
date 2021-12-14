import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Home from '../../pages/home'
import { withProvider } from '../decorators'

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        withProvider
    ]
} as ComponentMeta<typeof Home>

export const Default: ComponentStory<typeof Home> = () => <Home />

