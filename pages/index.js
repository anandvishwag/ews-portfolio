import React from 'react'
import Head from 'next/head'
import { Apis } from '../config';
import CategoryTab from '../components/CategoryTab';
// Implement getServerSideProps to fetch data
export async function getServerSideProps(context) {
    // Fetch data from an API or database
    const res = await fetch(`${Apis.GetCategoryWisePortfolio}`);
    const data = await res.json();
  
    // Pass fetched data to the page component props
    return {
      props: {
        data,
      },
    };
  }

const Home = ({data}) => {
    return (
        <>
         <Head>
        <title>My page title</title>
      </Head>
      <div>
            <CategoryTab data={data}/>
        </div>
        </>
      
    )
}
Home.layout = 'Main'
export default Home