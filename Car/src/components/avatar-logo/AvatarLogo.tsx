import React from "react";
import { Image, Text, View } from "react-native";
import stc from "string-to-color";
import AvatarLogoStyle from "./AvatarLogoStyle";

const AvatarLogo = (props: any) => {
    const user = props?.user;

    console.log("aaaaaa");

    const avatarStyle = [
        AvatarLogoStyle.userAvatar,
        { height: props?.size, width: props?.size }
    ];

    return (
        <>
            <View
                style={[
                    avatarStyle,
                    { backgroundColor: stc(user!.name + " " + user!.surname) }
                ]}
            >
                <Text style={AvatarLogoStyle.userAvatarText}>
                    {user?.name[0] + user?.surname[0]}
                </Text>
            </View>
            <Image
                source={{ uri: user!.avatarUrl }}
                style={[avatarStyle, AvatarLogoStyle.image]}
            />
        </>
    );
};

export default AvatarLogo;
