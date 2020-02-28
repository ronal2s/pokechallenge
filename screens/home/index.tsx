import React, { useEffect, useState } from "react";
import { Text, Alert, View, FlatList, TouchableOpacity } from "react-native";

//Utils
import { getPokemons } from "../../utils/api";
import { IPokemonList } from "../../utils/apiInterfaces";
//Style
import styles from "./styles";

function Home(props) {
    const [data, setData] = useState<IPokemonList | null>(null);
    const { navigation } = props;

    useEffect(() => {
        getPokemons(null, (error, json) => {
            if (!error) {
                setData(json);
            } else {
                Alert.alert("Error", "An error has ocurred");
            }
        })
    }, [])

    const onLoadingItems = () => {
        getPokemons(data.next, (error, json) => {
            if (!error) {
                setData({
                    count: json.count,
                    next: json.next,
                    previous: json.previous,
                    results: [...data.results, ...json.results]
                });
            } else {
                Alert.alert("Error", "An error has ocurred");
            }
        })
    }

    return (
        <View style={{alignItems: "center"}} >
            <FlatList
                data={data ? data.results : []}
                keyExtractor={item => item.url}
                onEndReached={onLoadingItems}
                numColumns={3}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Details", { ...item })} >
                            <View key={index} style={styles.cardView} >
                                <Text style={styles.cardText}>
                                    {item.name[0].toUpperCase() + item.name.substr(1)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Home;