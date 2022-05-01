import { Feather, AntDesign } from '@expo/vector-icons';
import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { List, Image, Modal, Button } from "native-base";
import axios from 'axios';
import { useState } from "react";
const Brand = props => {
    const [showModal, setShowModal] = useState(false)
    const deleteColor = (id) => {
        axios.get('https://depot25.dev.khb.asia/api/front-product-brand-destroy/' + id)
            .then(res => {
                setShowModal(false); r
            })
            .catch(err => {
                alert(err)
            })
    }
    const [BrandID, setId] = useState(null);
    return props.BrandList.map(ele =>
        <TouchableOpacity style={styles.borderitem} key={ele.id}>
            <List.Item style={props.BrandList}  >
                <View style={styles.img}>
                    <Image alt="PIC" source={{ uri: ele.logo }} style={styles.image1} />
                </View>
                <View style={styles.name}>
                    <Text style={styles.Textname}>{ele.name}</Text>
                    <Text style={styles.Textdate}>{ele.created_at}</Text>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity onPress={() => { setId(ele.id); setShowModal(true); }}>
                        <AntDesign name="close" size={25} color="red" />
                    </TouchableOpacity>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px" style={{ backgroundColor: '#060818' }}>
                            <Modal.CloseButton />
                            <Modal.Header style={{ alignItems: 'center' }}>
                                <AntDesign name="exclamationcircleo" size={60} color="#f8bb86" />
                            </Modal.Header>
                            <Modal.Body style={{ alignItems: 'center', }}>
                                <Text style={{ color: 'gray', fontSize: 30, fontWeight: '700', paddingTop: 15 }}> Are You You ?</Text>
                                <Text style={{ color: 'gray', fontSize: 16, paddingTop: 10 }}> You won't be able to revert this!</Text>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group variant="ghost" space={2}>
                                    <Button onPress={() => { deleteColor(BrandID); }}  >
                                        <Text style={{ fontSize: '22', color: '#bfbfbf', fontWeight: '700' }}>Yes, delete it  </Text>
                                    </Button>
                                    <Button onPress={() => {
                                        setShowModal(false)
                                    }}>
                                        <Text style={{ fontSize: '22', color: '#bfbfbf', fontWeight: '700', paddingLeft: 20 }}>  Cancel</Text>
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </View>
            </List.Item>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    borderitem: {
        margin: 2,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: '#f2f2f2'
    },
    img: {
        flex: 3,
        height: 100,
        width: '50%',
        marginLeft: -10
        , justifyContent: 'center',
        alignItems: "center",
        borderRightWidth: 0.5
        ,
        borderRightColor: 'gray'
    },
    name:
    {
        flex: 4,
        width: '50%',
        height: 100,
        justifyContent: 'center',
        padding: 10

    },
    action: {

        paddingRight: 5,
        paddingTop: 3,
        height: 100,
    },
    Textname:
    {
        fontWeight: 'bold',
        fontSize: 20
    },
    image1: {
        width: '100%',
        height: '100%'
    },
    Textdate: {
        fontSize: 12,
        color: 'gray',
    },
});
export default Brand;
