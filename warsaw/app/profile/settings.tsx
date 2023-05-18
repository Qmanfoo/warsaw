import GameInformationForm from 'components/forms/GameInformationForm'
import PersonalInformationForm from 'components/forms/PersonalInformationForm'
import BackLeftIcon from 'components/icons/BackLeftIcon'
import SegmentedButton from 'components/ui/SegmentedButton'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Modal, Pressable, View } from 'react-native'
import colors from 'utils/colors'

const formOptions = [
  { label: 'Personal Info', value: 'personal' },
  { label: 'Game Info', value: 'game' },
]

const SettingsScreen = () => {
  const [selectedForm, setSelectedForm] = useState(formOptions[0].value)
  const [modalVisible, setModalVisible] = useState(true)

  const handleFormChange = (value: string) => {
    setSelectedForm(value)
  }

  const router = useRouter()

  const handleClose = async () => {
    setModalVisible(false)
    router.replace('/profile')
  }

  return (
    <View>
      <Modal animationType="slide" visible={modalVisible} onRequestClose={handleClose} transparent>
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 8 }}>
          <Pressable onPress={handleClose}>
            <BackLeftIcon color={colors.black} size={25} />
          </Pressable>
          <View style={{ alignItems: 'center' }}>
            <SegmentedButton options={formOptions} selectedValue={selectedForm} onOptionChange={handleFormChange} />
          </View>
        </View>
        {selectedForm === 'personal' && <PersonalInformationForm />}
        {selectedForm === 'game' && <GameInformationForm />}
      </Modal>
    </View>
  )
}

export default SettingsScreen
