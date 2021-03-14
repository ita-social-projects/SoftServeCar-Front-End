import React from "react";
import { Switch, Text, View } from "react-native";
import ChooseOptionStyle from "./ChooseOptionStyle";

const ChooseOption = (props: any) => {
    return (
        <View style={ChooseOptionStyle.preferencesContainer}>
            <View style={ChooseOptionStyle.preferenceNameContainer}>
                <Text style={ChooseOptionStyle.preferenceNameText}>
                    {props.text}
                </Text>
            </View>
            <View style={ChooseOptionStyle.switchContainer}>
                <Switch
                    style={ChooseOptionStyle.switch}
                    value={props.value}
                    onValueChange={(value) => props.onValueChanged(value)}
                />
            </View>
            <View style={ChooseOptionStyle.preferenceValueContainer}>
                <Text style={ChooseOptionStyle.preferenceValueText}>
                    {props.value ? "Yes" : "No"}
                </Text>
            </View>
        </View>
    );
};

export default ChooseOption;
