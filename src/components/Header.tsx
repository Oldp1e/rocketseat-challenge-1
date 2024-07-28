import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src="/tasks-logo.svg" alt="App logo" />
    </header>
  )
}
