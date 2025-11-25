import { Stack } from "expo-router";

export default function RootLayout() {
  return (
     <Stack>
      <Stack.Screen
      name="(tabs)"
      options={{
        headerShown:true,
        tittle:"tabs"

      }}
      />
      <Stack.Screen
      name="index"
      options={{
        headerShown:true,
        tittle:"index"
      }}
      />


     </Stack>
  )
}
