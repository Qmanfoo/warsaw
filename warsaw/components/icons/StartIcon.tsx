import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const StarIcon = ({ size, color }) => <FontAwesomeIcon icon={systemIcons.STAR as IconProp} size={size} color={color} />

export default StarIcon
