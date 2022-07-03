import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function Screenshot({ screenshot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveShot : onTakeShot}
      style={styles.container}
    >
      {screenshot ? (
        <View>
          <Image
            source={{ uri: screenshot }}
            style={styles.image}
          />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera
          size={24}
          color={theme.colors.text_secondary}
          weight="bold"
        />
      )}
    </TouchableOpacity>
  );
}