import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },
  header: {
    flexDirection: "row",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texts: {
    flex: 1,
    paddingLeft: 15,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },
});
