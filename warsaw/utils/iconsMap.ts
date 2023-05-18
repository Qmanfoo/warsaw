import {
  AVAILABLE_PLATFORMS,
  AVAILABLE_LANGUAGES,
  PLAYSTYLE_HEAT_LEVEL,
  PLAYSTYLE_TRY_HARD_LEVEL,
  PLAYSTYLE_DECISION_MAKING_LEVEL,
  TIME_OF_DAY,
  AVAILABLE_COMMUNICATION_METHODS,
} from 'types/constants'
import {
  CommunicationMethod,
  DecisionMakingLevel,
  HeatLevel,
  IconForegroundKey,
  PlatformCode,
  TimeCode,
  TryHardLevel,
} from 'types/enums'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import colors from './colors'

type Icon = {
  key: string
  iconName: string
}

export const systemIcons = {
  PROFILE: 'user',
  FEED: 'th',
  MATCHES: 'user-group',
  ARCHIVE: 'archive',
  BACK_LEFT: 'chevron-left',
  BACK_RIGHT: 'chevron-right',
  STAR: 'star',
}

export const userIcon: Record<keyof typeof IconForegroundKey, any> = {
  ACE: { key: 'ace of cards icon', uri: require('assets/images/profileIcons/ace.png') },
  ALIEN: { key: 'alien icon', uri: require('assets/images/profileIcons/alien.png') },
  AXOLOTL: { key: 'axolotl icon', uri: require('assets/images/profileIcons/axolotl.png') },
  BOOK: { key: 'book icon', uri: require('assets/images/profileIcons/book.png') },
  CAT: { key: 'cat icon', uri: require('assets/images/profileIcons/cat.png') },
  COOK: { key: 'cook icon', uri: require('assets/images/profileIcons/cook.png') },
  CROSSHAIR: { key: 'crosshair icon', uri: require('assets/images/profileIcons/crosshair.png') },
  GLASSES: { key: 'glasses icon', uri: require('assets/images/profileIcons/glasses.png') },
  NINJA: { key: 'ninja icon', uri: require('assets/images/profileIcons/ninja.png') },
  OCTOPUS: { key: 'octopus icon', uri: require('assets/images/profileIcons/octopus.png') },
  OWL: { key: 'owl icon', uri: require('assets/images/profileIcons/owl.png') },
  PIG: { key: 'pig icon', uri: require('assets/images/profileIcons/pig.png') },
  PIRATE: { key: 'pirate icon', uri: require('assets/images/profileIcons/pirate.png') },
  PUMPKIN: { key: 'pumpkin icon', uri: require('assets/images/profileIcons/pumpkin.png') },
  ROBOT: { key: 'robot icon', uri: require('assets/images/profileIcons/robot.png') },
  SKULL: { key: 'skull icon', uri: require('assets/images/profileIcons/skull.png') },
  SPIDER: { key: 'spider icon', uri: require('assets/images/profileIcons/spider.png') },
  TANGERINE: { key: 'tangerine icon', uri: require('assets/images/profileIcons/tangerine.png') },
  WOLF: { key: 'wolf icon', uri: require('assets/images/profileIcons/wolf.png') },
  YINYANG: { key: 'yin-yang icon', uri: require('assets/images/profileIcons/yin-yang.png') },
}

export const platformIcon: Record<keyof typeof AVAILABLE_PLATFORMS, string> = {
  [PlatformCode.PC]: 'desktop',
  // [PlatformCode.Playstation]: 'playstation',
  // [PlatformCode.Xbox]: 'xbox',
  [PlatformCode.Switch]: 'gamepad',
}

// https://snack.expo.dev/@maskedman/flag-labels>
export const languageIcon: Record<
  keyof typeof AVAILABLE_LANGUAGES,
  {
    key: string
    emoji: string
  }
> = {
  en: {
    key: 'britain flag emoji',
    emoji: '🇬🇧',
  },
  es: {
    key: 'spain flag emoji',
    emoji: '🇪🇸',
  },
  jp: {
    key: 'japan flag emoji',
    emoji: '🇯🇵',
  },
}

export const playstyleIcon: {
  reaction: Record<keyof typeof PLAYSTYLE_HEAT_LEVEL, string>
  setting: Record<keyof typeof PLAYSTYLE_TRY_HARD_LEVEL, string>
  approach: Record<keyof typeof PLAYSTYLE_DECISION_MAKING_LEVEL, string>
} = {
  reaction: {
    [HeatLevel.Chill]: 'snowflake',
    [HeatLevel.Spicy]: 'fire',
  },
  setting: {
    [TryHardLevel.Casual]: 'gamepad',
    [TryHardLevel.Competitive]: 'trophy',
  },
  approach: {
    [DecisionMakingLevel.Strategic]: 'chess-rook',
    [DecisionMakingLevel.Aggressive]: 'fist-raised',
    [DecisionMakingLevel.Mixed]: 'balance-scale',
  },
}

export const timeIcon: Record<keyof typeof TIME_OF_DAY, any> = {
  [TimeCode.Day]: 'sun',
  [TimeCode.Evening]: 'cloud-sun',
  [TimeCode.Night]: 'moon',
}

export const communicationMethodIcon: Record<keyof typeof AVAILABLE_COMMUNICATION_METHODS, any> = {
  [CommunicationMethod.Text]: 'keyboard',
  [CommunicationMethod.Voice]: 'microphone',
}
