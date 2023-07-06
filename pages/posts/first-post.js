/**
 * @Author Tianxing.Qin
 * @Date 2023-07-06 16:54:34
 * @LastEditors Tianxing.Qin
 * @LastEditTime 2023-07-06 17:06:33
 * @Description 
 */
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
     <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link legacyBehavior href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}