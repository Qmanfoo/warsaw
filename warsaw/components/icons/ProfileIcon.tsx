import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const ProfileIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={systemIcons.PROFILE as IconProp} size={size} color={color} />
)

export default ProfileIcon
