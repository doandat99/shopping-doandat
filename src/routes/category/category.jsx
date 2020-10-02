import React, { useEffect } from 'react'
import './category.scss'
import { CategorySection } from 'components/category-section/category-section'
import { Link } from 'react-router-dom'
import mockupDataDiscount from 'data/mockupDataDiscount'
import mockupDataBestSeller from 'data/mockupDataBestSeller'
import mockupDataHot from 'data/mockupDataHot'
import { connect } from 'react-redux'


const Category = () => {

  const banner = [
    require('assets/images/category-image-1.png'),
    require('assets/images/category-image-2.png'),
    require('assets/images/category-image-3.png'),
    require('assets/images/category-image-4.png')
  ]

  useEffect(() => {
    
  }, [])

  return <div className="category">Category</div>;
}

export default Category;
