/**
 * @Author Tianxing.Qin
 * @Date 2023-07-06 17:25:43
 * @LastEditors Tianxing.Qin
 * @LastEditTime 2023-07-06 17:26:03
 * @Description 
 */
import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}