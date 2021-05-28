import React from 'react';
import { 
        Animated,
        StyleSheet,
        Text,
        View
    } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../styles/colors';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts';

interface OrderProps extends RectButtonProps {
    data: {
        id: string;
		area: string[];
		data: Date;
        status: string;
    };
    handleUpdate: () => void;
}

export const OrderField = ({ data, handleUpdate: handleUpdate, ...rest} : OrderProps) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                    <RectButton
                        style={styles.buttonUpdate}
                        onPress={handleUpdate}
                    >
                        <Feather name="check" size={32} color="white" />

                    </RectButton>
                    </View> 
                    
                </Animated.View>
            )}
        >
            
            <RectButton
                style={styles.container}
                {...rest}
            >   
                <Text style={styles.title}>
                    { data.id }
                </Text>

                <View style={styles.details}>
                    <Text style={styles.areaLabel} >
                        Pertence a(s) área(s)
                    </Text>
                    <Text style={styles.area} >
                        {data.area}
                        -
                        {data.status}
                    </Text>
                </View>

            </RectButton>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.shape,
        marginVertical: 5,
    },
    title: {
        flex: 1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontSize: 35,
        color: colors.blue_bay_of_many,
    },
    details: {
        alignItems: 'flex-end',
    },
    areaLabel: {
        fontSize: 14,
        fontFamily: fonts.text,
        color: colors.body_light,
    },
    area: {
        marginTop: 5,
        fontFamily: fonts.heading,
        fontSize: 14,
        color: colors.blue_bay_of_many,
    },
    status: {
        marginTop: 5,
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.body_dark,
    },
    buttonUpdate:{
        width: 100,
        height: 85,
        backgroundColor: colors.green,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right:20,
        paddingLeft: 15,
    }
})