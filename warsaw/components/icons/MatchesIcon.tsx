import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const MatchesIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={systemIcons.MATCHES as IconProp} size={size} color={color} />
)

export default MatchesIcon
