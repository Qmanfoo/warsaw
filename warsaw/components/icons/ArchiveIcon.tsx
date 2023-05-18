import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const ArchiveIcon = ({ size, color }) => (
  <FontAwesomeIcon icon={systemIcons.ARCHIVE as IconProp} size={size} color={color} />
)

export default ArchiveIcon
