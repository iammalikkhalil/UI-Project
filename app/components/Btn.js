import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../assets/colors/ThemeContext"; // Adjust the import path as necessary

export default function Btn({
  backgroundColor, // Allow overriding default value
  borderColor, // Allow overriding default value
  width = "90%", // Default width if not passed
  borderRadius = 6, // Default border radius if not passed
  color, // Allow overriding default value
  fontFamily = "Regular", // Default fontFamily if not passed
  fontSize = 18, // Default fontSize if not passed
  text = "Click Me!", // Default text if not passed
  onPress = () => {
    console.log("Clicked...");
  }, // Default onPress function
}) {
  const { theme } = useTheme(); // Access the current theme

  // Set default values if props are not provided
  const btnBackgroundColor = backgroundColor || theme.primary; // Use theme primary if backgroundColor is not passed
  const btnBorderColor = borderColor || theme.border; // Use theme secondary if borderColor is not passed
  const textColor = color || theme.neutral1; // Use theme textPrimary if color is not passed

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor: btnBackgroundColor,
          width,
          borderColor: btnBorderColor,
          borderRadius,
        },
      ]}
      onPress={onPress}
    >
      <Text style={{ color: textColor, fontFamily, fontSize }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 2,
    paddingVertical: 15,
    margin: 2,
  },
});
