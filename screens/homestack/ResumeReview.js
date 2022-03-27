import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Image} from 'react-native-elements'
import moment from 'moment';
import { Datepicker, Layout, Button, ButtonGroup} from '@ui-kitten/components';
import { MomentDateService } from '@ui-kitten/moment';

const dateService = new MomentDateService();

const ResumeReview = () => {

  const [date, setDate] = React.useState(moment());

  return (
      <SafeAreaView style={{height: '100%', backgroundColor: 'white', alignItems: 'center', padding: 12}}>
          <Text style={{fontSize: 25, fontWeight: '700', textAlign: 'center'}}>Get your Resume Reviewed by a Professional</Text>
          <Image style={{width: 250, height: 200, borderRadius: 20, margin: 15}} source={{uri: 'https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg'}}/>
          <Text style={{fontSize:18, textAlign: 'center', padding: 12}}>Your resume is an extension of you, make sure it is of highest quality by booking an appointment with our various professionals.</Text>
    <Layout style={styles.container} level='1'>

      <Datepicker
        placeholder='Pick Date'
        date={date}
        dateService={dateService}
        onSelect={nextDate => setDate(nextDate)}
      />

    </Layout>
    <Layout style={styles.container2} level='1'>

    <ButtonGroup style={styles.buttonGroup} appearance='outline' status='primary'>
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>
    </Layout>
    </SafeAreaView>
  );
};

export default ResumeReview

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonGroup: {
    margin: 2,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    justifyContent: 'center',
    backgroundColor: '#3366FF',
  },
});