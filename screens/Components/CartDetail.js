import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Image, Box, Heading, Text, View, Icon, IconButton } from "native-base";
const CartDetail = (props) => {
    const [num, setNum] = useState(1);
    const Add = () => {
        setNum(num + 1);
    }
    const Sub = () => {
        setNum(num - 1);
    }
    const price = (value) => {
        return value * num
    }
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView onPress={props.onPress}>
                <Box bg="white" shadow={1} rounded="lg" width="100%" height={100} marginTop={1}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'justify', flex: 1, flexDirection: 'row' }}>
                        <View>
                            <Image source={{ uri: props.image }} alt='1' resizeMode="cover" height={150} width={190} roundedTop="md" />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <Ionicons style={{ position: 'absolute', top: -15, right: 1, zIndex: 90000 }} name="close-outline" size={32} color="red" />
                            <View style={styles.FlexButton}>
                                <IconButton variant="solid" onPress={() => Sub()}
                                    icon={<Icon size={5} as={<AntDesign name="left" />} color="white" />} />
                                <Text style={{ paddingHorizontal: 10, fontSize: 23 }}>{num}</Text>
                                <IconButton variant="solid" onPress={() => Add()}
                                    icon={<Icon size={5} as={<AntDesign name="right" />} color="white" />} />
                            </View>
                            <Heading p={[4, 4, 8]} > {props.name} </Heading>
                            <View style={{ width: '70%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text fontSize="lg" bold color="red.600">
                                        ${price(props.price)}
                                    </Text>
                                    <Text> Size: {props.size}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Box>

            </SafeAreaView>
        </View>
    );
}
const styles = StyleSheet.create({
    FlexButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});
export default CartDetail;