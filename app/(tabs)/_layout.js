import { Tabs } from "expo-router";
export default function _Layout(){
    <Tabs>
    <Tabs.Screen
    name="homepage"
    options={{
        headerShown:true,
        tittle:"feed"
    }}
    />
    <Tabs.Screen
    name="measurements"
    options={{
        headerShown:true,
        tittle:"feed"

    }}
    />
    <Tabs.Screen
    name="history"
    options={{
        headerShown:true,
        tittle:"history"
    }}
    />
    <Tabs.Screen
    name="settings"
    options={{
        headerShown:true,
        tittle:"history"
    }}
    />
</Tabs>
}
