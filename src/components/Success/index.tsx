import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import successIMag from '../../assets/success.png';
import { Copyright } from '../Copyright';

interface Props {
  onSendAnotherfeedback: () => void;
}

export function Success({ onSendAnotherfeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successIMag} style={styles.image} />
      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onSendAnotherfeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}