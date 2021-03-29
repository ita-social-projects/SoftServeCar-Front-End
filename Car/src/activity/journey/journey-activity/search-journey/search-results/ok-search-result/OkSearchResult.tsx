import React from "react";
import { FlatList, View } from "react-native";
import JourneyCard from "../../../../../../components/journey-card/JourneyCard";
import DM from "../../../../../../components/styles/DM";
import OkSearchResultStyle from "./OkSearchResultStyle";
import Journey from "../../../../../../../models/Journey";

const OkSearchResult = (props: {route: {params: {journeys: Journey[]}}}) => {
    const journeys = props.route.params.journeys;

    return (
        <View style={[OkSearchResultStyle.container, { backgroundColor: DM("#FFFFFF") }]}>
            <FlatList
                ListHeaderComponent={<View />}
                ListHeaderComponentStyle={OkSearchResultStyle.listHeader}
                style={OkSearchResultStyle.list}
                data={journeys}
                keyExtractor={(item, index) => "" + item + index}
                renderItem={({ item }) => <JourneyCard journey={item} />}
            />
        </View>
    );
};

export default OkSearchResult;
