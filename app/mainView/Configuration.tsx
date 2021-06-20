import React, { useCallback } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, IconButton, Modal, Portal, Title } from 'react-native-paper'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'
import { add, allDiceSelector } from '../../store/ducks/dice'
import Dice from './configuration/Dice'

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        marginBottom: 32,
        padding: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: -16,
    },
    closeButton: {
        marginRight: -16,
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 'auto',
        width: 160,
    },
})

interface Props {
    visible: boolean
    hide: () => void
}

const Configuration = ({ visible, hide }: Props): JSX.Element => {
    const allDice = useAppSelector(allDiceSelector)
    const dispatch = useAppDispatch()

    const onAdd = useCallback(() => {
        dispatch(add({}))
    }, [dispatch])

    return (
        <Portal>
            <Modal contentContainerStyle={styles.modal} visible={visible} onDismiss={hide}>
                <ScrollView>
                    <View style={styles.titleRow}>
                        <Title>Configuration</Title>
                        <IconButton icon="close" size={32} style={styles.closeButton} onPress={hide} />
                    </View>
                    {allDice.map((dice, index) => (
                        <Dice key={index} dice={dice} index={index} />
                    ))}
                    <View style={styles.buttonContainer}>
                        <Button accessibilityLabel="Press here to add a dice" mode="outlined" onPress={onAdd}>
                            Add
                        </Button>
                    </View>
                </ScrollView>
            </Modal>
        </Portal>
    )
}

export default Configuration
