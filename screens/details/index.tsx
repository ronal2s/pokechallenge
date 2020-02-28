import React, { useState, useEffect } from "react";
import { View, Text, Alert, ScrollView, Image } from "react-native";

//Utils
import { getInfoPokemon } from "../../utils/api";
import { IPokemonItem } from "../../utils/apiInterfaces";
import styles from "./styles";
import { toCapitalize } from "../../utils/functions";
import Slide from "../../components/slide";

type IDetailsProps = {
    name: string,
    url: string
}

function DetailsScreen(props) {
    const { route } = props;
    const { name, url }: IDetailsProps = props.route.params;
    const [info, setInfo] = useState<IPokemonItem | null>(null);

    useEffect(() => {
        getInfoPokemon(url, (error, json) => {
            if (!error) {
                setInfo(json);
            } else {
                Alert.alert("Error", "An error has ocurred");
            }
        })
    }, [])

    if (info) {
        return (
            <ScrollView style={{ marginHorizontal: 10 }} >
                <Text style={styles.title} >
                    {toCapitalize(info.name)}
                </Text>


                <View style={styles.imagesContainer}>
                    <Slide >
                        <View style={styles.spriteContainerRed} >
                            <Image style={{ flex: 1, width: "100%" }} source={{ uri: info.sprites.back_default }} resizeMode="contain" />
                        </View>
                    </Slide>
                    <Slide delay={100}>
                        <View style={styles.spriteContainerBlue} >
                            <Image style={{ flex: 1, width: "100%" }} source={{ uri: info.sprites.front_default }} resizeMode="contain" />
                        </View>
                    </Slide>
                    <Slide delay={200}>
                        <View style={styles.spriteContainerRed} >
                            <Image style={{ flex: 1, width: "100%" }} source={{ uri: info.sprites.front_shiny }} resizeMode="contain" />
                        </View>
                    </Slide>
                    <Slide delay={300}>
                        <View style={styles.spriteContainerBlue} >
                            <Image style={{ flex: 1, width: "100%" }} source={{ uri: info.sprites.back_shiny }} resizeMode="contain" />
                        </View>
                    </Slide>
                </View>

                <Text style={styles.subtitle}> Weight </Text>
                <Text style={styles.lightFont} > - {info.weight}</Text>


                <Text style={styles.subtitle}> Abilities </Text>
                {info.abilities.map((item, index) => {
                    return (
                        <Text style={styles.lightFont} key={index} > - {toCapitalize(item.ability.name)}</Text>
                    )
                })}
                <Text style={styles.subtitle}> Base experience </Text>
                <Text style={styles.lightFont} >{info.base_experience}</Text>

                <Text style={styles.subtitle}> Height </Text>
                <Text style={styles.lightFont} >{info.height}</Text>

                <Text style={styles.subtitle}> Moves </Text>
                {info.moves.map((item, index) => {
                    return (
                        <Text style={styles.lightFont} key={index} > - {toCapitalize(item.move.name)}</Text>
                    )
                })}
                <Text style={styles.subtitle}> Stats </Text>
                {info.stats.map((item, index) => {
                    return (
                        <Text style={styles.lightFont} key={index} > - {toCapitalize(item.stat.name)}</Text>
                    )
                })}
                <Text style={styles.subtitle}> Types </Text>
                {info.types.map((item, index) => {
                    return (
                        <Text style={styles.lightFont} key={index} > - {toCapitalize(item.type.name)}</Text>
                    )
                })}
            </ScrollView>
        )
    }

    return <Text>Loading</Text>
}

export default DetailsScreen;