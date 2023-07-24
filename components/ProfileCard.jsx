import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from '@expo/vector-icons';

export function ProfileCard({ firstName, lastName, age, onPressSocialMedia}) {

    return (
    <View style= { s.container }>
        <View style={ s.header }>
            <View>
                <Image style={ s.avatar } source={{ uri : "https://i.pravatar.cc/300" }}/>
            </View>
            <View style={ s.texts }>
                <Text style={ s.name }>{firstName} {lastName}</Text>
                <Text>Hi I am {age} years old and I am totally a real person and definitely not a computer.</Text>
                <Text> { age > 100 ? "I am old af" : "I am not so old" }</Text>
            </View>
        </View>
        <View style={ s.social }>
            <TouchableOpacity onPress={() => onPressSocialMedia("instagram")} style={ s.socialBtn }>
                <FontAwesome name="instagram" size={24} color="hotpink" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressSocialMedia("linkedin")} style={ s.socialBtn }>
                <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressSocialMedia("github")} style={ s.socialBtn }>
                <FontAwesome name="github-square" size={24} color="#333" />
            </TouchableOpacity>
            
        </View>
    </View>
    )
}