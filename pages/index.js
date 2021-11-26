import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Document from './document'
import PrimarySearchAppBar from './components/Navbar'
export default function Home() {
  return (
    <>

    <Document />
    <PrimarySearchAppBar />


    <h1>Booklee Initialized</h1>
    <h2>This is H2</h2>
    <h3>Book description</h3>
    <button>Click Me</button>
    </>
  )
}
