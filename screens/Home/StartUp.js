import Color from "../../constant/Color";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCredential } from "../../store/user/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
const StartUp = ({ navigation }) => {
  const userData = useSelector(state => state.users.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      if (userData == null) {
        AsyncStorage.getItem("data").then((response) => {
          if (response != null) {
            dispatch(setCredential(JSON.parse(response)));
          }
          navigation.navigate("Home");
        });
      } else {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={Color.textPrimary} />
    </View>
  );
};
export default StartUp;
