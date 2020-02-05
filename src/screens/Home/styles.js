import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  button: {
    marginHorizontal: 30,
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  font1: {
    color: 'white',
    fontSize: 10,
  },
  font2: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
  },
  font3: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
