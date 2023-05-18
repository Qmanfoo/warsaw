import { SplashScreen, Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArchive,
  faBalanceScale,
  faCheck,
  faChessRook,
  faChevronLeft,
  faChevronRight,
  faCloudSun,
  faDesktop,
  faFire,
  faFistRaised,
  faGamepad,
  faKeyboard,
  faMicrophone,
  faMoon,
  faSnowflake,
  faStar,
  faSun,
  faTh,
  faTrophy,
  faUser,
  faUserGroup,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import colors from 'utils/colors'
import { systemIcons } from 'utils/iconsMap'
import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ProfileIcon from 'components/icons/ProfileIcon'
import FeedIcon from 'components/icons/FeedIcon'
import MatchesIcon from 'components/icons/MatchesIcon'

// https://fontawesome.com/v4/cheatsheet/
library.add(
  faUser,
  faTh,
  faUserGroup,
  faArchive,
  faChevronLeft,
  faChevronRight,
  faDesktop,
  faPlaystation,
  faXbox,
  faGamepad,
  faSnowflake,
  faFire,
  faGamepad,
  faTrophy,
  faChessRook,
  faFistRaised,
  faBalanceScale,
  faSun,
  faCloudSun,
  faMoon,
  faKeyboard,
  faMicrophone,
  faStar,
  faXmark,
  faCheck
)

const Layout = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('assets/fonts/Inter-Thin.ttf'),
  })

  if (!fontsLoaded) {
    return <SplashScreen />
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.primary,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.background, // TabBar background
          justifyContent: 'space-between',
        },
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ProfileIcon,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: FeedIcon,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          headerShown: true,
          title: 'Matches',
          tabBarIcon: MatchesIcon,
        }}
      />
    </Tabs>
  )
}

export default Layout
