import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='root'>
      NextJS
      <h1 className='title'>Test 입니다.</h1>
      <ul className='box'>
        <li>
          하나
          <span className='num'>1</span>
        </li>
        <li>
          둘
          <span className='num'>2</span>
        </li>
        <li>
          셋
          <span className='num'>3</span>
        </li>
      </ul>
      <style jsx>{`
        .title {
          color: blue;
        }
        .box {
          border: 1px solid green;
          li {
            margin: 5px 0;
            background-color: yellow;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
