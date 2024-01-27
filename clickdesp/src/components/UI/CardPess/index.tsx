import styles from "./styles.module.scss";

interface CardPessProps {
  name: string;
  role: string;
}

export function CardPess({ name, role }: CardPessProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <li>
          <h3 className={styles.name}>{name}</h3>
          <small className={styles.role}>{role}</small>
        </li>
        <div className={styles.icons}>
          <div className={styles.ver}>Ver</div>
          <div className={styles.edit}>Edit</div>
          <div className={styles.del}>Del</div>
        </div>
      </div>
    </div>
  );
}
