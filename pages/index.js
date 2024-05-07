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
         <title>Explosionweb Solutions</title>
         <meta name="description" content="Explosionweb Solutions is a multifaceted young organization. We specialize in creating top-notch web solutions for your business. We are a team of dedicated and creative professionals continuously working towards making your business realize its true online potential. We have a bold and promising approach to digital marketing, branding, App development and many more online service"/>
         
      </Head>
      <div>
            <CategoryTab data={data}/>
        </div>
        </>
      
    )
}
Home.layout = 'Main'
export default Home