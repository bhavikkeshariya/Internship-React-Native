import React, {useState} from 'react';
import {
  Button,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

const DATA = [
  {
    title: 'React-Native',
    data: ['Bhavik', 'Yash'],
  },
  {
    title: 'Flutter',
    data: ['Savan'],
  },
];

const Feb6 = () => {
  const [model, setmodel] = useState(false);
  const [style1, setstyle1] = useState(styles.text);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor="#0ca635"
      />
      <Modal animationType="slide" visible={model}>
        <Pressable onPress={() => setstyle1(styles.text1)}>
          <Text style={style1}>Welcome to Creole Studios</Text>
        </Pressable>
        <Button title="Close Model" onPress={() => setmodel(!model)} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Text style={styles.text2}>
            Every company has its unheard story that’s unknown to the world.
            Creole Studios is no exception. Started in 2014 to transmute the
            world with bespoke and tailor-made digital solutions and resource
            augmentation, we cater to both small and big enterprises. With our
            confident and professional team in different niches such as Web App
            Development, Mobile App Development, and Cloud App Development, we
            assure better ROI, exceptional results, outstanding customer
            experience, and no-risk outcomes. It doesn’t matter how small or a
            big challenge, our dedicated team always takes it as a challenge and
            finds a better way to deliver a high-quality solution. Creole
            Studios follow three methodologies that ensure that every project
            should have its way to do and should be the standard one. We build a
            high-quality digital solution using agile, scrum, and waterfall
            methodologies.
          </Text>
        </ScrollView>
      </Modal>
      <Button title="Show model" onPress={() => setmodel(true)} />
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <View>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text style={styles.text1}>{title}</Text>
          </View>
        )}
      />
      <Switch
        thumbColor={isEnabled ? 'black' : 'white'}
        trackColor={{false: '#ed0928', true: '#099aed'}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default Feb6;
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
  },
  text2: {
    fontSize: 50,
  },
});
