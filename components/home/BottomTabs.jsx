import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s150x150/239472075_1653018531554356_5615506315927581514_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=NoCw6bvuFU8AX8nQ4qo&tn=auyD7IPpi12HGIIS&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-Mq6fXIlD7HeGvPUz0gUt5RWaKsC9D5G8MX8eHzL1-ag&oe=62186AB2&_nc_sid=7bff83",
    inactive:
      "https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s150x150/239472075_1653018531554356_5615506315927581514_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=NoCw6bvuFU8AX8nQ4qo&tn=auyD7IPpi12HGIIS&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-Mq6fXIlD7HeGvPUz0gUt5RWaKsC9D5G8MX8eHzL1-ag&oe=62186AB2&_nc_sid=7bff83",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icons = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab ? styles.profilePic(activeTab) : null
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icons key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {
    // position: "absolute",
    // width: "100%",
    // bottom: "0%",
    // zIndex: 999,
    // backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    backgroundColor: "white",
    borderWidth: activeTab === 'Profile' ? 2 : 0
  }),
});
