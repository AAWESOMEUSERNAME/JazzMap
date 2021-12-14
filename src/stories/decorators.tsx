import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { Story } from '@storybook/react'

export const withProvider = (Story: Story) => (
    <Provider store={store}>
        <Story />
    </Provider>
)


