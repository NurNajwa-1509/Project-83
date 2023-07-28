import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList
} from "react-native";
import PostCard from "./PostCard";

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fontsLoaded: false
        };
      }

      renderItem = ({ item: story }) => {
        return <PostCard story={story} />;
      };

    render(){
        return(
            <View 
            style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                        source={require('../assets/logo.png')}
                        style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}