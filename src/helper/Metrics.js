import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guideLineBaseWidth = 375
const guideLineBaseHeight = 812

const horizontalScale = (size) => (width / guideLineBaseWidth) * size
const verticleScale = (size) => (height / guideLineBaseHeight) * size
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor

export { horizontalScale, verticleScale, moderateScale }