import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Chart } from "../../components";

export default function Dashboard() {
  return (
    <ScrollView>
      <Chart />
      <Chart />
      <Chart />
      <Chart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
