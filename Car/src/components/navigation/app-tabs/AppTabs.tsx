import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {useContext, useEffect, useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import JourneyTabs from "../../../activity/journey/journey-tabs/JourneyTabs";
import MessagesTabs from "../../../activity/messages/messages-tabs/MessagesTabs";
import MyProfileTabs from "../../../activity/my-profile/my-profile-tabs/MyProfileTabs";
import NotificationsTabs from "../../../activity/notifications/notifications-tabs/NotificationsTabs";
import AppTabsList from "./AppTabsList";
import AppTabsStyle from "./AppTabsStyle";
import APIConfig from "../../../../api-service/APIConfig";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AuthContext, {SignalRHubConnection} from "../../auth/AuthContext";
import NotificationsService from "../../../../api-service/notifications-service/NotificationsService";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppTabsList>();

const AppTabs: React.FC<AppTabsProps> = () => {
    const { user } = useContext(AuthContext);
    let [unreadNotificationsNumber, setUnreadNotificationsNumber] = useState(0);
    NotificationsService.getUnreadNotificationsNumber(user!.id)
        .then(result => setUnreadNotificationsNumber(result.data as number));
    const hubConnection = SignalRHubConnection;
    hubConnection.start();

    useEffect(() => {
        hubConnection.on(
            "updateUnreadNotificationsNumber",
            setUnreadNotificationsNumber
        );
    });

    const getTabBarVisibility = (route: any) => {
        const routeName = getFocusedRouteNameFromRoute(route)!;
        const hideOnScreens = ["Chat"];
        if (hideOnScreens.indexOf(routeName) > -1) return false;
        return true;
    };

    return (
        <Tabs.Navigator
            initialRouteName="JourneyTabs"
            sceneContainerStyle={AppTabsStyle.navigator}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case "MessagesTabs":
                            iconName = "chatbubbles";
                            break;
                        case "MyProfileTabs":
                            iconName = "person";
                            break;
                        case "JourneyTabs":
                            iconName = "car";
                            break;
                        case "NotificationsTabs":
                            iconName = "notifications";
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                }
            })}
            tabBarOptions={{
                labelStyle: AppTabsStyle.labelStyle,
                activeTintColor: "black",
                inactiveTintColor: "#AAA9AE",
                keyboardHidesTabBar: true
            }}
        >
            <Tabs.Screen
                name="MessagesTabs"
                component={MessagesTabs}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarLabel: "Messages"
                })}
            />
            <Tabs.Screen
                options={{ tabBarLabel: "My Profile" }}
                name="MyProfileTabs"
                component={MyProfileTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Journey"
                }}
                name="JourneyTabs"
                component={JourneyTabs}
            />
            <Tabs.Screen
                options={{
                    tabBarLabel: "Notifications",
                    tabBarBadge:
                        unreadNotificationsNumber > 0
                            ? unreadNotificationsNumber.toString()
                            : undefined
                }}
                name="NotificationsTabs"
                component={NotificationsTabs}
            />
        </Tabs.Navigator>
    );
};

export default AppTabs;
