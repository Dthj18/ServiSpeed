import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PieChart, RadarChart } from "react-native-gifted-charts";

export default function CotizacionesScreen() {

    const pieData = [
        { value: 60, color: '#7EDD83', gradientCenterColor: '#7EDD83' },
        { value: 10, color: '#DD7E7E', gradientCenterColor: '#DD7E7E' },
        { value: 30, color: '#7E96DD', gradientCenterColor: '#7E96DD' },
    ];



    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.titulo1}>{"Cotizaciones"}</Text>
                    <View style={styles.cakecontainer}>
                        <PieChart
                            data={pieData}
                            donut
                            showGradient
                            innerCircleColor={'transparent'}
                            radius={110}
                            innerRadius={60}
                        />

                        <View style={styles.legendContainer}>
                            <View style={styles.legendItem}>
                                <View style={[styles.colorDot, { backgroundColor: '#7EDD83' }]} />
                                <Text style={styles.legendText}>Aprobado</Text>
                            </View>

                            <View style={styles.legendItem}>
                                <View style={[styles.colorDot, { backgroundColor: '#7E96DD' }]} />
                                <Text style={styles.legendText}>Pendiente</Text>
                            </View>

                            <View style={styles.legendItem}>
                                <View style={[styles.colorDot, { backgroundColor: '#DD7E7E' }]} />
                                <Text style={styles.legendText}>Rechazado</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.titulo2}>{"Razones de rechazo"}</Text>
                    <View style={styles.graphiccontainer}>
                        <RadarChart data={[42, 40, 35, 40, 55]}
                        labels={['Poca claridad', 'Deinterés', 'Tiempo de entrega', 'Otros', 'Precio no competitivo']}
                        
                        >
                            

                        </RadarChart>
                    </View>
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
        paddingBottom: 100,
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
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        minHeight: 300,
        borderRadius: 20,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    graphiccontainer: {
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
        minHeight: 300,
        borderRadius: 20,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorDot: {
        width: 10,
        height: 10,
        borderRadius: 6,
        marginRight: 8,
    },
    legendText: {
        fontSize: 13,

    },
});