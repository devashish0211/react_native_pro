import { View, Button, ScrollView, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

// // VIEW
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "blue" }} />
//   )
// }

//// TEXT
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <Text>
//         <Text style={{ color: "white" }}>Hello</Text> World
//       </Text>
//     </View>
//   )
// }

// //IMAGE
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }} >
//       {/* Normal image */}
//       <Image source={logoImg} style={{ width: 300, height: 300 }} />

//       {/* Image for Network */}
//       <Image
//         style={{ width: 300, height: 300 }}
//         source={{ uri: 'https://picsum.photos/200' }}
//       />

//       {/* Background Image */}
//       <ImageBackground source={logoImg} style={{ flex: 1 }}>
//         <Text>Image text</Text>
//       </ImageBackground>
//     </View>
//   )
// }

// //SCROLLVIEW
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <ScrollView style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//         <Text>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ab reiciendis architecto eligendi consequatur saepe dolore! Sunt, eveniet ipsa temporibus harum, ipsam ullam, magnam adipisci accusamus alias beatae commodi odit. A enim maiores, asperiores ipsum veniam praesentium. Et repudiandae consequuntur cupiditate necessitatibus labore perspiciatis tempora quisquam soluta magni. Tenetur dolores reprehenderit cupiditate repellat modi accusantium excepturi nesciunt inventore ratione consectetur animi, natus, sint mollitia eum et, alias aperiam fuga molestiae voluptates debitis repudiandae tempore! Voluptates, obcaecati vitae quibusdam qui reprehenderit facere quae cumque minima. Earum eveniet mollitia cumque veniam, excepturi repudiandae inventore quaerat nesciunt hic nisi culpa ipsa nemo voluptatem?alias aperiam fuga molestiae voluptates debitis repudiandae tempore! Voluptates, obcaecati vitae quibusdam qui reprehenderit facere quae cumque minima. Earum eveniet mollitia cumque veniam, excepturi repudiandae inventore quaerat nesciunt hic nisi culpa ipsa nemo voluptatem?
//         </Text>
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//       </ScrollView>
//     </View>
//   )
// }

// // BUTTON
// export default function App() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//       <Button
//         title="Press"
//         color="red"
//         onPress={() => console.log('Button pressed')}
//         disabled
//       />
//     </View>
//   )
// }


//PRESSABLE
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        color="red"
        onPress={() => console.log('Button pressed')}
        disabled
      />
    </View>
  )
}


//MODAL

//STATUSBAR

//ACTIVITY INDICATOR

//ALERT 

//CUSTOM COMPONENT 
