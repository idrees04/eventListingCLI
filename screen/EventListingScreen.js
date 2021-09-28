import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import IconDelate from "react-native-vector-icons/AntDesign";
import IconEdit from "react-native-vector-icons/Entypo";

function EventListingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>My Events Listing</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.filter}>
          <TouchableOpacity
            // onPress={onloginbutoncall}
            style={styles.touchableOpacityEventType}
          >
            <Text style={styles.ABC}>Event Type Filter V</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacityCreateEvent}
            onPress={() => navigation.navigate("Create")}
          >
            <Text style={styles.ABC}>+Create Event</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventList}>
          <View style={styles.eventListMap}>
            <View style={styles.eventTitleRow}>
              <TouchableOpacity
                // onPress={onloginbutoncall}
                style={styles.touchableOpacityEventTitle}
              >
                <Text style={styles.ABC}>Event Title</Text>
              </TouchableOpacity>
              <View style={styles.editDeleteIconView}>
                <TouchableOpacity style={styles.touchableOpacityDeleteIcon}>
                  <IconDelate
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.deleteIcon}
                    name={"delete"}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableOpacityEditIcon}>
                  <IconEdit
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    style={styles.editIcon}
                    name={"edit"}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.textDateTime}>Date and Time</Text>
            <Text style={styles.textDescription}>Description</Text>
            <Text style={styles.textAttachment}>
              View Attachment (if exists)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          // onPress={onloginbutoncall}
          style={styles.touchableOpacityListView}
        >
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.ABC}>
            List View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.TouchableOpacityCalenderView}
        >
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.ABC}>
            Calendar View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#991",
    alignItems: "stretch",
  },
  head: {
    flex: 1,
    flexDirection: "row",
    //   backgroundColor: "#FFF",
    //  alignItems: "stretch",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
    // width: "auto",
    // minWidth: 50,
  },
  body: {
    flex: 10,
    //  backgroundColor: "#FFF",
    //    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    //  borderWidth: 1,
    //  borderColor: "#991",
    //  marginRight: "3%",
    //  marginLeft: "3%",
    margin: "4%",
    alignItems: "stretch",
  },

  filter: {
    flex: 2.5,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "stretch",
    // alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    // borderColor: "#991",
  },
  touchableOpacityEventType: {
    flex: 1,
    //   flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
    //  margin: "5%",
    marginStart: "0%",
    marginEnd: "2.5%",
    marginTop: "13%",
    marginBottom: "5%",
  },
  TouchableOpacityCreateEvent: {
    flex: 1,
    //   flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
    //  margin: "5%",
    marginStart: "2.5%",
    marginEnd: "0%",
    marginTop: "13%",
    marginBottom: "5%",
  },
  eventList: {
    flex: 7.5,
    flexDirection: "column",
    //  backgroundColor: "#FFF",
    alignItems: "stretch",
    // alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%",
    //  borderWidth: 1,
    //  borderColor: "#991",
  },
  eventListMap: {
    flex: 0.5,
    flexDirection: "column",
    //  backgroundColor: "#FFF",
    alignItems: "stretch",
    // alignItems: "center",
    justifyContent: "space-between",
    // margin: "3%",
    // padding: "2%",
    borderWidth: 1,
    borderColor: "#991",
  },
  eventTitleRow: {
    flex: 1,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    //  alignItems: "stretch",
    alignContent: "center",
    // alignItems: "center",
    justifyContent: "space-between",
    margin: "1.5%",
    // marginTop: "1%",
    //  marginHorizontal: "1%",
    // margin: "1%",
    //  borderWidth: 1,
    //   borderColor: "#991",
  },
  touchableOpacityEventTitle: {
    flex: 0.3,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    // alignItems: "stretch",
    alignItems: "center",
    justifyContent: "center",
    // margin: "3%",
    borderWidth: 1,
    borderColor: "#991",
    // alignSelf: "left",
  },
  editDeleteIconView: {
    flex: 0.3,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    // alignItems: "stretch",
    alignItems: "center",
    justifyContent: "center",
    // margin: "3%",
    //   borderWidth: 1,
    //   borderColor: "#991",
  },
  touchableOpacityDeleteIcon: {
    flex: 1,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    // margin: "3%",
    // borderWidth: 1,
    //  borderColor: "#991",
  },
  deleteIcon: {
    flex: 1,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    //  alignItems: "center",
    // justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    // margin: "3%",
    fontSize: 30,
    // borderWidth: 1,
    //  borderColor: "#991",
  },
  touchableOpacityEditIcon: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    // margin: "3%",
    //  fontSize: 30,
    //  backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    //  borderWidth: 1,
    //  borderColor: "#991",
  },
  editIcon: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    // margin: "3%",
    fontSize: 30,
    //  backgroundColor: "#FFF",
    //  alignItems: "center",
    //  justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    //  borderWidth: 1,
    //  borderColor: "#991",
  },

  textDateTime: {
    flex: 1,
    // flexDirection: "start",
    //  textAlignVertical: "center",
    //alignSelf: "center"
    textAlignVertical: "center",
    textAlign: "left",
    margin: "1.5%",
    borderWidth: 1,
    borderColor: "#991",
  },
  textDescription: {
    flex: 1,
    flexDirection: "row",
    textAlignVertical: "center",
    textAlign: "left",
    alignContent: "center",
    // alignItems: "center",
    justifyContent: "space-between",
    margin: "1.5%",
    borderWidth: 1,
    borderColor: "#991",
  },
  textAttachment: {
    flex: 1,
    flexDirection: "row",
    textAlignVertical: "center",
    textAlign: "left",
    alignContent: "center",
    // alignItems: "center",
    justifyContent: "space-between",
    margin: "1.5%",
    borderWidth: 1,
    borderColor: "#991",
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "stretch",
    // alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#991",
  },
  touchableOpacityListView: {
    flex: 1,
    // flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
  },
  TouchableOpacityCalenderView: {
    flex: 1,
    //   flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
  },
});
export default EventListingScreen;
