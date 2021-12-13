import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from '../../pages/home';

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Home>;

export const Default: ComponentStory<typeof Home> = () => <Home />;

