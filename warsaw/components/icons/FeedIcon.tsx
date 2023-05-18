import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { systemIcons } from 'utils/iconsMap'

const FeedIcon = ({ size, color }) => <FontAwesomeIcon icon={systemIcons.FEED as IconProp} size={size} color={color} />

export default FeedIcon
