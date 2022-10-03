import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import {colors } from '../utils/colors'
import {fontSizes} from '../utils/sizes'

export const FocusHistory = ({history}) => {

  if (!history || !history.length) return <Text style={styles.item}>We haven't focused on anything yet!</Text>;


  const renderItem = ({item}) => {
    return <Text style={styles.item}>- {item}</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus history will be built here</Text>
      <FlatList data={history} renderItem={renderItem}/>
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    color : colors.brightgray,
    fontSize: fontSizes.md,
    paddingLeft: fontSizes.lg
  },
  item : {
    color: colors.brightgray,
    paddingLeft: fontSizes.lg,
    paddingTop: fontSizes.sm,
    fontSize: fontSizes.md
  },
  container: {
    padding: fontSizes.sm,
    flex: 1
  }
})