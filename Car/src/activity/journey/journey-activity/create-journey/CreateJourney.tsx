import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FreeButtonChoiceAlert from "../alerts/FreeButtonChoiceAlert";
import PaidButtonChoiceAlert from "../alerts/PaidButtonChoiceAlert";
import JourneyCreationDropDownPicker from "../dropdown-picker/JourneyCreationDropDownPicker";
import SeatsInputSpinner from "../input-spinner/SeatsInputSpinner";
import TouchableDateTimePicker from "../touchable/datetime-picker/TouchableDateTimePicker";
import { CreateJourneyStyle } from "./CreateJourneyStyle";

function CreateJourney () {
    const [isVisibleJourneyTypeDropDown, setIsVisibleJourneyTypeDropDown] = useState(false);
    const [isVisibleCarDropDown, setIsVisibleCarDropDown] = useState(false);
    const [state, setState] = useState();

    function changeJourneyTypeDropDownVisibility () {
        setIsVisibleJourneyTypeDropDown(true);
        setIsVisibleCarDropDown(false);
    }

    function changeCarDropDownVisibility () {
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(true);
    }

    function closeAllDropDowns () {
        setIsVisibleJourneyTypeDropDown(false);
        setIsVisibleCarDropDown(false);
    }

    const [freeButtonStyle, setFreeButtonStyle] = useState(CreateJourneyStyle.activeButton);

    const [paidButtonStyle, setPaidButtonStyle] = useState(CreateJourneyStyle.inactiveButton);

    return (
        <ScrollView style={CreateJourneyStyle.container}>
            <TouchableDateTimePicker
                iconName="time"
            />
            <JourneyCreationDropDownPicker
                items={[
                    { label: "Own Car", value: "own car" },
                    { label: "Taxi", value: "taxi" },
                ]}
                paddingLeft={100}
                placeholder="Journey type:"
                isVisible={isVisibleJourneyTypeDropDown}
                onOpen={() => changeJourneyTypeDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => {
                    setState(item.value);
                    closeAllDropDowns();
                }}
            />
            <JourneyCreationDropDownPicker
                items={[
                    { label: "Volkswagen Jetta", value: "volkswagen jetta" },
                    { label: "Ford Fiesta", value: "ford fiesta" },
                    { label: "Toyota Camry", value: "toyota camry" },
                ]}
                paddingLeft={105}
                searchable={true}
                placeholder="Choose a Car:"
                isVisible={isVisibleCarDropDown}
                onOpen={() => changeCarDropDownVisibility()}
                onChangeItem={(item: { value: React.SetStateAction<undefined>; }) => {
                    setState(item.value);
                    closeAllDropDowns();
                }}
                onClose={state}
            />
            <SeatsInputSpinner/>
            <View style={CreateJourneyStyle.feeContainer}>
                <Text style={CreateJourneyStyle.text}>
                    Fee
                </Text>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonFree, freeButtonStyle]}
                    onPress={() => {
                        FreeButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.activeButton);
                        setPaidButtonStyle(CreateJourneyStyle.inactiveButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, freeButtonStyle]}>Free</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[CreateJourneyStyle.feeButtonPaid, paidButtonStyle]}
                    onPress={() => {
                        PaidButtonChoiceAlert();
                        setFreeButtonStyle(CreateJourneyStyle.inactiveButton);
                        setPaidButtonStyle(CreateJourneyStyle.activeButton);
                    }}>
                    <Text style={[CreateJourneyStyle.feeButtonText, paidButtonStyle]}>Paid</Text>
                </TouchableOpacity>
            </View>
            <View style={CreateJourneyStyle.commentsView}>
                <Text style={CreateJourneyStyle.commentsCaption}>Comments</Text>
                <TextInput
                    style={CreateJourneyStyle.TextInputStyle}
                    multiline={true}
                    maxLength={100}
                    numberOfLines={10}
                />
                <Text>Up to 100 symbols</Text>
            </View>
            <TouchableOpacity
                style={[CreateJourneyStyle.publishButton]}>
                <Text style={CreateJourneyStyle.publishButtonText}>Publish</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default CreateJourney;
