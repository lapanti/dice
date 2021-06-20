import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'
import { IconButton, Modal, Portal, Title } from 'react-native-paper'

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
})

interface Props {
    visible: boolean
    hide: () => void
}

const Settings = ({ visible, hide }: Props): JSX.Element => {
    return (
        <Portal>
            <Modal contentContainerStyle={styles.modal} visible={visible} onDismiss={hide}>
                <View style={styles.titleRow}>
                    <Title>Settings</Title>
                    <IconButton icon="close" size={32} style={styles.closeButton} onPress={hide} />
                </View>
            </Modal>
        </Portal>
    )
}

export default Settings
