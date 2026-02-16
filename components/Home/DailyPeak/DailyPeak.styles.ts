import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    padding: 20,
    // borderWidth: 1,
    // borderColor: '2px solid #EBF2F7',
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 20,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    flex: 1,
    marginLeft: 12,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3748',
    fontFamily: 'Inter_400Regular',
  },
  subTitleText: {
    fontSize: 14,
    color: '#A0AEC0',
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  valueArea: {
    alignItems: 'flex-end',
  },
  valueText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2D3748',
    fontFamily: 'Inter_400Regular',
  },
  thresholdText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A5C3D9',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#F7FAFC',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#A5C3D9',
    borderRadius: 3,
  },
});
