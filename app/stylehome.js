import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerLogo: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 10,
  }),
  headerView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontSize: 14,
    lineHeight: 16,
  },
  mainBtn: {
    borderRadius: 10,
    borderWidth: 5,
    backgroundColor: "red",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  btnText: {
    fontSize: 16,
    color: "white",
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 30,
  },
});

export default styles;
