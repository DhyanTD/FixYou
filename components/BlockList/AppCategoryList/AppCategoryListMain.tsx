import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import AppRow from './AppRow';
import styles from './AppCategory.style';
import { BlockCategory } from '../BlockListMain';



export interface CategorySectionProps {
  category: BlockCategory;
  onToggle: (categoryId: string, appId: string, value: boolean) => void;
}

export default function AppCategoryListMain({ category, onToggle }: CategorySectionProps) {
  // console.log('category:', category)
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{category.title}</Text>
      <View style={styles.card}>
        {category.apps.map((app, idx) => (
          <AppRow
            key={app.id}
            app={app}
            isLast={idx === category.apps.length - 1}
            onToggle={(appId, value) => onToggle(category.id, appId, value)}
          />
        ))}
      </View>
    </View>
  )
};


