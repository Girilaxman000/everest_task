import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import CardComponent from '../components/card-component/CardComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import FilterComponent from '../components/filter-component';

const override = css`
  display: block;
  margin: auto;
  margin-top: 10%;
  border-color: red;
`;

export default function Home() {
  const [apiData, setApiData] = useState([])
  const [loadingSpinner, setLoadingSpinner] = useState(true)
  const [category, setCategory] = useState('')
  const [color, setColor] = useState("#ffffff");

  const getAllData = () => {
    axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
      .then((response) => {
        setApiData(response.data.data.product)
        setLoadingSpinner(false)
      })
      .catch((error) => {
      })
  }

  useEffect(() => {
    getAllData()
  }, [])


  const userInput = (list) => {
    setCategory(list)
  }

  const filterData = [...apiData].filter(data => data.category[1] === category)

  const items = category === '' ? apiData : filterData

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        loadingSpinner ?
          <ClipLoader color={color} css={override} size={150} />
          :
          <>
            <FilterComponent items={apiData} getCategory={userInput} />
            <section className={styles.items}>
              <div className="row m-20" >
                {items.map(data => <CardComponent key={data.id} item={data} />)}
              </div>
            </section>
          </>
      }

    </div>
  )
}
