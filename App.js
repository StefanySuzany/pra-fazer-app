import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import logo from "./src/assets/logo-pra-fazer.png";

export default function App() {
	return (
		<View style={styles.form}>
			<Image style={styles.logo} source={logo} />
			<View>
				<TextInput style={styles.input} placeholder="E-mail"></TextInput>
			</View>
			<View>
				<TextInput style={styles.input} placeholder="Senha"></TextInput>
			</View>
			<TouchableOpacity style={styles.btnlogin}>
				<Text style={styles.btnText}>Entrar</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btncriar}>
				<Text style={styles.btnText}>Criar Usuário</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		flex: 1,
		backgroundColor: "#FF6600",
		alignItems: "center",
		justifyContent: "center",
	},

	input: {
		padding: 10,
		backgroundColor: "#FFF",
		marginTop: 10,
		marginBottom: 15,
		borderRadius: 10,
		width: 450,
	},

	btnlogin: {
		padding: 8,
		backgroundColor: "#070A52",
		borderRadius: 10,
		width: 450,
		marginTop: 10,
		marginBottom: 10,
		alignItems: "center",
	},

	btnText: {
		color: "#FFF",
		fontSize: 17,
	},

	logo: {
		marginBottom: 10,
	},
});
