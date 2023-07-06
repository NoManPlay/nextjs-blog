/**
 * @Author Tianxing.Qin
 * @Date 2023-07-06 19:00:53
 * @LastEditors Tianxing.Qin
 * @LastEditTime 2023-07-06 19:01:25
 * @Description 
 */
import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
