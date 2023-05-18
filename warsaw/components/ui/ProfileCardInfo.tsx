import { FlatList, StyleSheet, View } from 'react-native'
import Text from 'components/ui/Text'
import Icon from 'components/ui/Icon'
import Availability from 'components/ui/Availability'
import colors from 'utils/colors'
import { communicationMethodIcon, languageIcon, platformIcon, playstyleIcon } from 'utils/iconsMap'
import type { GameInformation, PersonalInformation } from 'types'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

type ProfileCardInfoProps = {
  personalInfo: PersonalInformation
  gameInfo: GameInformation
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    rowGap: 4,
    flexShrink: 1,
  },
  infoRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItemContainer: {
    gap: 4,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
  },
  detail: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: colors.accent,
  },
})

const ProfileCardInfo = ({ personalInfo, gameInfo }: ProfileCardInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoRowContainer}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{personalInfo.name}</Text>
            <FontAwesomeIcon icon={communicationMethodIcon[gameInfo.communication]} size={24} color={colors.accent} />
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{personalInfo.pronouns}</Text>
        </View>

        <FlatList
          data={gameInfo.platforms}
          renderItem={({ item }) => <FontAwesomeIcon icon={platformIcon[item]} size={20} color={colors.text} />}
          keyExtractor={(item) => platformIcon[item]}
          inverted
          horizontal
        />
      </View>

      <View style={styles.infoRowContainer}>
        <View>
          <Text style={styles.category}>Roles</Text>
          <FlatList
            data={gameInfo.roles}
            renderItem={({ item }) => <Text style={styles.detail}>{item}</Text>}
            keyExtractor={(item) => item}
            horizontal
            ItemSeparatorComponent={() => <Text style={styles.detail}>{' · '}</Text>}
          />
        </View>

        <View>
          <Text style={styles.category}>Playstyle</Text>
          <FlatList
            data={[
              playstyleIcon.reaction[gameInfo.playstyle.reaction],
              playstyleIcon.setting[gameInfo.playstyle.setting],
              playstyleIcon.approach[gameInfo.playstyle.approach],
            ]}
            renderItem={({ item }) => <FontAwesomeIcon icon={item} size={20} color={colors.accent} />}
            keyExtractor={(item) => item}
            horizontal
          />
        </View>
      </View>

      <View style={[styles.infoRowContainer, { columnGap: 8 }]}>
        <View>
          <Text style={styles.category}>Schedule</Text>
          <Availability availability={personalInfo.availability} />
        </View>

        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.category}>Languages</Text>
          <FlatList
            data={personalInfo.languages}
            renderItem={({ item }) => <Text style={styles.detail}>{languageIcon[item].emoji}</Text>}
            keyExtractor={(item) => item}
            horizontal
            ItemSeparatorComponent={() => <Text style={styles.detail}>{` `}</Text>}
          />
        </View>

        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.category}>Region</Text>
          <Text style={styles.detail}>{gameInfo.region}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', columnGap: 4 }}>
        {personalInfo.flairs?.map((flair) => (
          <Text.Flair key={flair} title={flair} />
        ))}
      </View>
    </View>
  )
}

export default ProfileCardInfo
