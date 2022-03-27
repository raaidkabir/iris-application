import React, {useEffect} from 'react';
import { StyleSheet, ScrollView, View, LogBox} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Image, Button} from 'react-native-elements'
import moment from 'moment';
import { Datepicker, Layout, IndexPath, Menu, MenuItem} from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';

const dateService = new MomentDateService();

const ResumeReview = ({navigation}) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    
  const [date, setDate] = React.useState(moment());
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <ScrollView style={styles.back} showsVerticalScrollIndicator={false}>
          <Text style={{fontSize: 25, fontWeight: '700', textAlign: 'center', marginTop: 45}}>Get your Resume Reviewed by a Professional</Text>
          <View style={{alignItems: 'center'}}>
          <Image style={{width: 250, height: 200, borderRadius: 20, margin: 15}} source={{uri: 'https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg'}}/>
          </View>
          <Text style={{fontSize:18, textAlign: 'center', padding: 12}}>Your resume is an extension of you, make sure it is of highest quality by booking an appointment with our various professionals.</Text>
    <Layout style={styles.container} level='1'>

      <Datepicker
        placeholder='Pick Date'
        date={date}
        dateService={dateService}
        onSelect={nextDate => setDate(nextDate)}
      />
      <Menu
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <MenuItem title='9:30 AM'/>
      <MenuItem title='10:00 AM'/>
      <MenuItem title='10:30 AM'/>
      <MenuItem title='11:00 AM'/>
      <MenuItem title='11:30 AM'/>
      <MenuItem title='12:00 PM'/>
      <MenuItem title='12:30 PM'/>
      <MenuItem title='1:00 PM'/>
    </Menu>
    </Layout>
    <View style={{alignItems: 'center'}}>
    <Button buttonStyle = {styles.button} onPress={()=>navigation.replace('HomeScreen')} title='Book'/>
    </View>
    </ScrollView>
  );
};

export default ResumeReview

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
  back: {
    flex:1,
    margin: 10,
    backgroundColor: 'white',
},
button:{
    backgroundColor:'#6f8ab7',
    marginTop:10,
    borderRadius: 20,
    width: 200,
    margin: 10,

}
});