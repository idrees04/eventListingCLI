import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
} from "react-native";
// import Picker from "@react-native-picker/picker";
function CreateEventScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Select");

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text>Create Event</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyTopView}>
          <View style={styles.nameView}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#969696"
              keyboardType="default"
              autoCapitalize="none"
              autoCorrect={false}
              //   onChangeText={(text) => setEmail({ text })}
              style={styles.inputNameText}
            />
          </View>
          <View style={styles.descriptionView}>
            <TextInput
              placeholder="Description"
              multiline={true}
              //  numberOfLines={3} ERROR
              placeholderTextColor="#969696"
              //   onChangeText={(text) => setEmail({ text })}
              style={styles.inputDescriptionText}
            />
          </View>
        </View>
        <View style={styles.bodyCenterView}>
          <View style={styles.datePickerView}>
            <TextInput
              placeholderTextColor="#969696"
              placeholder="Date Picker"
              // editable={false}
              //    selectTextOnFocus={false}
              //   value={date}
              //  onFocus={showTimepicker}
              //   onChangeText={(text) => setEmail({ text })}
              style={styles.inputDatePickerText}
            />
          </View>
          <View style={styles.timeView}>
            <TouchableOpacity
              // onPress={onloginbutoncall}
              style={styles.touchableOpacityStartTime}
            >
              <Text style={styles.ABC}>Start Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityEndTime}
              onPress={() => navigation.navigate("Create")}
            >
              <Text style={styles.ABC}>End Time</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyBottomView}>
          <View style={styles.attachmentView}>
            <TextInput
              placeholder="Attachment (Optional)"
              placeholderTextColor="#969696"
              //   onChangeText={(text) => setEmail({ text })}
              //  returnKeyType="next"
              style={styles.inputAttachmentText}
              //     blurOnSubmit={false}
            />
          </View>
          <View style={styles.pickerView}>
            <Picker
              selectedValue={selectedValue}
              //   style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Event" value="java" />
              <Picker.Item label="Out of Office" value="Out of Office" />
              <Picker.Item label="Task" value="Task" />
            </Picker>
          </View>
          <View style={styles.TouchableOpacityCreateEventView}>
            <TouchableOpacity
              style={styles.TouchableOpacityCreateEvent}
              onPress={() => navigation.navigate("EventScreen")}
            >
              <Text style={styles.ABC}>Create Event</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  body: {
    flex: 11,
    //  backgroundColor: "#FFF",
    //    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    //  borderWidth: 1,
    //  borderColor: "#991",
    //  marginRight: "3%",
    //  marginLeft: "3%",
    margin: "4%",
    alignItems: "stretch",
  },
  bodyTopView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    // justifyContent: "center",
    //  borderWidth: 1,
    //  borderColor: "#991",
    // marginVertical: "3%",
    marginBottom: "3%",
  },
  nameView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginVertical: "4%",
    borderWidth: 1,
    borderColor: "#991",
  },
  descriptionView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginVertical: "2%",
    borderWidth: 1,
    borderColor: "#991",
  },
  bodyCenterView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    //  backgroundColor: "#FFF",
    //  justifyContent: "center",
    marginVertical: "3%",
    //  borderWidth: 1,
    // borderColor: "#991",
  },
  datePickerView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginVertical: "3%",
    borderWidth: 1,
    borderColor: "#991",
  },
  timeView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    marginVertical: "3%",
    justifyContent: "center",
    //   borderWidth: 1,
    //   borderColor: "#991",
  },
  touchableOpacityStartTime: {
    flex: 1,
    //   flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
    marginStart: "0%",
    marginEnd: "5%",
  },
  TouchableOpacityEndTime: {
    flex: 1,
    //   flexDirection: "row",
    //  backgroundColor: "#FFF",
    alignItems: "center",
    // alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
    marginStart: "5%",
    marginEnd: "0%",
  },
  bodyBottomView: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "stretch",
    //  backgroundColor: "#FFF",
    justifyContent: "space-between",
    marginVertical: "2%",

    //  borderWidth: 1,
    // borderColor: "#991",
  },
  attachmentView: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "0%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
  },
  pickerView: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "3%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
  },
  TouchableOpacityCreateEventView: {
    flex: 1,
    marginTop: "0%",
    justifyContent: "center",
    //  borderWidth: 1,
    //  borderColor: "#991",
  },
  TouchableOpacityCreateEvent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#991",
  },
});
export default CreateEventScreen;
