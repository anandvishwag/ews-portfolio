import React, {useState} from 'react'
import Link from 'next/link';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { IoWarning } from "react-icons/io5";
import Image from 'next/image';
const CategoryTab = ({data}) => {
  const [selectedData , setSelectedData] = useState(data.categories[0]);
  const [portfolio , setPortfolio] = useState(selectedData.children[0]);

  const handleChangeMainCategory = (mainCategoryId)=>{
    const category = data.categories.find(el=>el.id === mainCategoryId);
    setSelectedData(category);
    setPortfolio(category.children[0]);

  }
  const handleChangeSubcategory = (subCategoryId) =>{
    setPortfolio(selectedData.children.find(el=>el.id === subCategoryId));
  }


  return (
    <>
       <div className="citegorynav">
                <div className="cat-menu">
                    {
                        data.categories.map((item)=>{
                            return <button key={item.id} onClick={()=>handleChangeMainCategory(item.id)} className={selectedData.id === item.id ? 'active' : ''}><i className={item.icon} /><span>{item.title}</span></button>
                        })
                    }

                </div>
            </div>
            <section className="mainsection">
                <div className="container">
                    <div className="flex aic filter">
                        <h1>{selectedData.title}</h1>
                        <ul className="filtenav">
                             {
                                selectedData.children.map((item, index)=>{
                                    return  <li key={index}>
                                    <button className={portfolio.id === item.id ? 'active' : ''} onClick={()=>handleChangeSubcategory(item.id)}>
                                        <a>{item.title}</a>
                                    </button></li>
                                })
                             }
                        </ul>
                    </div>
                    <div className="gallery">
                        {
                            portfolio && portfolio.portfolios.length > 0 ?  <LightGallery speed={500}>
                            {
                                portfolio.portfolios.map((item)=>{
                                    return  <div className="col-3 col-sm-4 col-xs-6" data-src={item.big_image} key={item.id}>
                                    <Image
      src={item.thumbnail}
      alt={item.title}
      width={270}
      height={232}
    />
                                </div>
                                })
                            }
                        </LightGallery> : <div className='data-error'>
                        <IoWarning /> <p>Data not found !</p>
                        </div>
                        }
                      
                    </div>

                </div>
            </section>
    </>
  )
}

export default CategoryTab