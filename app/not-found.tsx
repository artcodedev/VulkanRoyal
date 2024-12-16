
import styles from "./style/notFound.module.css"

export default function NotFound() {
    return (
      <div className={styles['error-404']}>
        <div className={styles['error-404__container']}>
          <h1 className={styles['error-404__title']}>404</h1>
          <div className={styles['error-404__content']}>
            <p>Так-так.</p>
            <p>Кажется, этой страницы нет на</p>
            <p>сайте.</p>
          </div>
          <div className={styles['error-404__button-wrap']}>
            
            <a href="/" className={styles['error-404__button']}>На главную</a>
          </div>
          
        </div>
        <div className={styles['error-404_background']}></div>
      </div>
    )
  }