import { Image, StyleSheet, View } from 'react-native'
import ProfileCardInfo from 'components/ui/ProfileCardInfo'
import colors from 'utils/colors'
import type { Profile as ProfileProps } from 'types'
import { userIcon } from 'utils/iconsMap'

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  profileIconContainer: {
    alignItems: 'center',
  },
})

const ProfileCard = ({ icon, personalInfo, gameInfo }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.profileIconContainer, { backgroundColor: icon.background }]}>
        <Image source={userIcon[icon.foreground].uri} style={{ width: 256, height: 256 }} />
      </View>
      <ProfileCardInfo personalInfo={personalInfo} gameInfo={gameInfo} />
    </View>
  )
}

export default ProfileCard
