import Tabs from "./Tab";
import * as React from "react";
import ConatainTab from "./ContainTabs";
import { NavigationContainer } from '@react-navigation/native';
const RootStack = () => {
    return (
        <NavigationContainer>
            <ConatainTab />
        </NavigationContainer>
    );
}
export default RootStack;