import { Stack } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';

export default function CotizacionesScreen() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.titulo1}>{"Cotizaciones"}</Text>
                    <View style={styles.cakecontainer}></View>
                    <Text style={styles.titulo2}>{"Razones de rechazo"}</Text>
                    <View style={styles.graphiccontainer}></View>
                </ScrollView>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom:100,
    },
    titulo1: {
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "LexendTera-Bold",
        marginBottom: 10,
    },
    titulo2: {
        fontSize: 13,
        fontWeight: "bold",
        fontFamily: "LexendTera-Bold",
        marginBottom: 10,
    },
    cakecontainer: {
        flexDirection: "row",
        backgroundColor: "#E5E5E5",
        height: 300,
        borderRadius: 20,
        marginBottom: 20,
    },
    graphiccontainer: {
        flexDirection: "row",
        backgroundColor: "#E5E5E5",
        height: 300,
        borderRadius: 20,
    }

})