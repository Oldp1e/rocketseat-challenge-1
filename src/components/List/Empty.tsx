import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src="/clipboard.png" alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não cadastrou nenhuma tarefa</strong>
      </p>
    </div>
  )
}
