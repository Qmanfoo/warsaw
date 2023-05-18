import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileCard from 'components/ui/ProfileCardCompact'
import { dummyUserDatabase } from 'utils/dummyData'
import colors from 'utils/colors'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { Stack } from 'expo-router'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'
import BackLeftIcon from 'components/icons/BackLeftIcon'
import ArchiveIcon from 'components/icons/ArchiveIcon'

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginHorizontal: 5,
  },
})

const MatchesScreen = () => {
  const [showArchived, setShowArchived] = useState(false)
  const matchesList = dummyUserDatabase.rootUser.matches

  const renderItem = ({ item }: { userId: string; archived: boolean; dateMatched: Date; discordUsername: string }) => {
    if (!showArchived && item.archived) {
      return null
    }

    return (
      <ProfileCard
        profile={dummyUserDatabase[item.userId].profile}
        archived={item.archived}
        dateMatched={item.dateMatched}
        discordUsername={item.discordUsername}
      />
    )
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable onPress={() => setShowArchived(!showArchived)} style={{ marginRight: 10 }}>
              <ArchiveIcon color={showArchived ? colors.accent : colors.black} size={25} />
            </Pressable>
          ),
        }}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <FlatList
          data={matchesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.userId}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </>
  )
}

export default MatchesScreen
