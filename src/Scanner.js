import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BarCodeScanner} from 'expo';

class Scanner extends React.Component {
    static navigationOptions = {
        title: 'Scanner'
    }

    state= {
        scanSuccess: false
    }

    handleBarCodeRead = (result) => {
        this.props.navigation.navigate('home', {
            secret:result.data
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <BarCodeScanner style={styles.scanner}
                onBarCodeRead={this.handleBarCodeRead}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    scanner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barCodeArea: {
        width: 180,
        height: 180,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: 'white',
        borderStyle: 'dashed'
    }
});


export default Scanner;