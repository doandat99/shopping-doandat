import React, { useState, useEffect } from 'react'
import './product-detail.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { DeliveryIcon, CallIcon, PaymentIcon, GuardIcon, ReturnIcon } from 'components/icons/icons'
import { CategorySection } from 'components/category-section/category-section'
import OtherProduct1 from 'assets/images/product-detail-6.jpg'
import OtherProduct2 from 'assets/images/product-detail-7.jpg'
import OtherProduct3 from 'assets/images/product-detail-8.jpg'
import SizeTutorial from 'assets/images/size-tutorial.png'
import mockupDataHot from 'data/mockupDataHot'

export const ProductDetail = () => {
  const [imageProduct] = useState([
    require('assets/images/product-detail-1.jpg'),
    require('assets/images/product-detail-2.jpg'),
    require('assets/images/product-detail-3.jpg'),
    require('assets/images/product-detail-4.jpg'),
    require('assets/images/product-detail-5.jpg'),
  ])
  const [size, setSize] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentTab, setCurrentTab] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div className="product-detail">ProductDetail</div>;
}
