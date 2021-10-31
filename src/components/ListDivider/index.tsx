import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
    isCenter?: boolean;
}

export default function index({ isCenter }: Props) {
    return (
        <View
            style={[
                styles.container,
                isCenter ? {
                    marginVertical: 12
                } : {
                    marginTop: 2,
                }
            ]}
        />
    )
}
