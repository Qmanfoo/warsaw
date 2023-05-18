import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const BackLeftIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={systemIcons.BACK_LEFT as IconProp} size={size} color={color} />
)

export default BackLeftIcon
