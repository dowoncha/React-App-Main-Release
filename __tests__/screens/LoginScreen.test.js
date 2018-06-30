import 'react-native'
import React from 'react'

import { LoginScreen } from '../../Screens'

import renderer from 'react-test-renderer'

jest.mock('../../db')

test('render correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON()

    expect(tree).toMatchSnapshot()
})