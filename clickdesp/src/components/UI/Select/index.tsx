
import styles from './styles.module.scss'

interface SelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

export function Select({ options }: SelectProps) {
  return (
    <select className={styles.select}>
      {
        options.map(option => (
          <option value={option.value}>{option.label}</option>
      ))
      }
    </select>
  );
}
