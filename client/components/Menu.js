import styles from "../styles/Menu.module.css";
import Link from 'next/link'

export default function Menu() {
  return (<div className={styles.menu}>

    <Link href='ENS'>ENS</Link>
      <Link href='About'>About</Link>

  </div>);
}


