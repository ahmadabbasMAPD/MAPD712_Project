import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profilePic}
          source={require('./assets/profile_image.jpeg')}
        />
        <Text style={styles.headerText}>Yennifer Doe</Text>
        <Image
          style={styles.gearIcon}
          source={require('./assets/star.jpeg')}
        />
      </View>
      <View style={styles.appointments}>
        <Text style={styles.appointmentsTitle}>Upcoming Appointments</Text>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>Dr. Benny Wilson</Text>
          <Text style={styles.appointmentSubtitle}>
            Behaviour Expert
          </Text>
          <Text style={styles.appointmentTime}>Monday 10:30am to 11:00am</Text>
        </View>
        <View style={styles.appointment}>
          <Text style={styles.appointmentTitle}>Dr. Kristin Watson</Text>
          <Text style={styles.appointmentSubtitle}>
            Nutritionist Expert
          </Text>
          <Text style={styles.appointmentTime}>Wednesday 10:30am to 11:00am</Text>
        </View>
      </View>
      <View style={styles.article}>
        <Image
          style={styles.articleImage}
          source={require('./assets/profile_image.jpeg')}
        />
        <Text style={styles.articleTitle}>The Pros and Cons of Fast Food</Text>
        <Text style={styles.articleLink}>Read Now</Text>
      </View>
      <View style={styles.tabBar}>
        <Image
          style={styles.tabIcon}
          source={require('./assets/star.jpeg')}
        />
        <Image
          style={styles.tabIcon}
          source={require('./assets/star.jpeg')}
        />
        <Image
          style={styles.tabIcon}
          source={require('./assets/star.jpeg')}
        />
        <Image
          style={[styles.tabIcon, styles.profileTab]}
          source={require('./assets/star.jpeg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ff5b77',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  gearIcon: {
    width: 25,
    height: 25,
  },
  appointments: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  appointmentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointment: {
    marginBottom: 10,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appointmentSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#666',
  },
  article: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  articleImage:{
      width:'100%',
      height:'auto'
   },
   articleTitle:{
       fontSize :18 ,
       fontWeight:'bold' ,
       marginVertical :10 
   },
   articleLink:{
       color:'#ff5b77' ,
       fontWeight:'bold' ,
       fontSize :16 
   },
   tabBar:{
       flexDirection:'row' ,
       justifyContent:'space-around' ,
       paddingVertical :10 ,
       borderTopWidth :StyleSheet.hairlineWidth ,
       borderTopColor :'#ccc'
   } ,
   tabIcon:{
       width :25 ,
       height :25 
   } ,
   profileTab:{
       borderRadius :50 
   }
});
