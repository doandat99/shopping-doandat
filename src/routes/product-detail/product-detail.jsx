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

  return (
    <div className="product-detail">
      <div className="section-wrap">
        <div className="quick-link">
          <Link to="/">Trang chủ</Link>
          <Link to="/">Giày</Link>
          <Link to="/">Giày Bít</Link>
        </div>

        <div className="product-main d-flex flex-wrap">
          <div className="product-item col-lg-6 col-12 d-flex flex-wrap">
            {imageProduct.length !== 0 && imageProduct.map(item => 
              <div className="product-image">
                <img src={item} alt=""/>
              </div>
            )}
          </div>
          <div className="product-item col-lg-6 col-12">
             <h2 className="title">Giày Bít Mũi Nhọn Satin Phối Nơ - BMN 0418 - Màu Hồng</h2>
             <div className="product-status">NEW</div>
             <div className="price">545.000 ₫</div>
              <h6 className="size-title">Kích cỡ | <span>{size === 0 ? 'Tất cả' : size}</span></h6>
             <div className="size d-flex flex-wrap">
               <div className={classNames('size-block out-of-stock', { 'active' : size === 35 })} onClick={() => { setSize(35) }} >35</div>
               <div className={classNames('size-block', { 'active' : size === 36 })} onClick={() => { setSize(36) }} >36</div>
               <div className={classNames('size-block', { 'active' : size === 37 })} onClick={() => { setSize(37) }} >37</div>
               <div className={classNames('size-block', { 'active' : size === 38 })} onClick={() => { setSize(38) }} >38</div>
               <div className={classNames('size-block', { 'active' : size === 39 })} onClick={() => { setSize(39) }} >39</div>
             </div>
             <h6 className="size-title">Số lượng</h6>
             <div className="amount">
               <span className="minus" onClick={() => {amount > 1 && setAmount(amount - 1)}} >-</span>
                <span className="value">{amount}</span>
               <span className="plus" onClick={() => {setAmount(amount + 1)}} >+</span>
             </div>

             <h6>Sản phẩm cùng loại khác màu</h6>
             <div className="other-product d-flex flex-wrap">
               <Link className="other-product-item col-sm-4 col-6" to="/">
                 <img src={OtherProduct1} alt=""/>
               </Link>
               <Link className="other-product-item col-sm-4 col-6" to="/">
                 <img src={OtherProduct2} alt=""/>
               </Link>
               <Link className="other-product-item col-sm-4 col-6" to="/">
                 <img src={OtherProduct3} alt=""/>
               </Link>
             </div>

             <div className="endow">
               <div className="endow-item d-flex">
                 <DeliveryIcon />
                 <p>Sử dụng ngay <span>coupon freeship</span> để được giảm ngay 30K phí vận chuyển. Xem chi tiết</p>
               </div>
               <div className="endow-item d-flex">
                 <CallIcon />
                 <p><span>1800 6909</span>- Hotline đặt hàng (Miễn cước, 8h30 - 22h)</p>
               </div>
               <div className="endow-item d-flex">
                 <DeliveryIcon />
                 <p>Giao hàng nhanh trên toàn quốc</p>
               </div>
               <div className="endow-item d-flex">
                 <PaymentIcon />
                 <p>Thanh toán tiện lợi với nhiều hình thức</p>
               </div>
               <div className="endow-item d-flex">
                 <GuardIcon />
                 <p>Bảo hành sản phẩm trọn đời (trừ mắt kính, thắt lưng)</p>
               </div>
               <div className="endow-item d-flex">
                 <ReturnIcon />
                 <p>Miễn phí đổi sản phẩm trong 7 ngày (trừ mắt kính, thắt lưng)</p>
               </div>
             </div>
          </div>

          <div className="product-item col-lg-6 col-12">
            <div className="tab">
              <div className="tab-header">
                <div onClick={() => {setCurrentTab(1)}} className={classNames('tab-item', {'active' : currentTab === 1})}>THÔNG TIN CHI TIẾT</div>
                <div onClick={() => {setCurrentTab(2)}} className={classNames('tab-item', {'active' : currentTab === 2})}>HƯỚNG DẪN CHỌN SIZE</div>
              </div>
              <div className="tab-main">
                <div className={classNames('tab-item', {'active' : currentTab === 1})}>
                  <div className="line">
                    <h4>Mã sản phẩm</h4>
                    <p>1010BMN0418</p>
                  </div>

                  <div className="line">
                    <h4>Loại sản phẩm</h4>
                    <p>Giày Bít</p>
                  </div>

                  <div className="line">
                    <h4>Độ cao gót</h4>
                    <p>1 cm</p>
                  </div>

                  <div className="line">
                    <h4>Loại mũi</h4>
                    <p>Bít mũi nhọn</p>
                  </div>

                  <div className="line">
                    <h4>Chất liệu</h4>
                    <p>Satin</p>
                  </div>

                  <div className="line">
                    <h4>Hoa văn, chi tiết</h4>
                    <p>Một màu, đính nơ</p>
                  </div>

                  <div className="line">
                    <h4>Phù hợp sử dụng</h4>
                    <p>Đi làm, đi tiệc, đi chơi</p>
                  </div>
                </div>
                <div className={classNames('tab-item', { 'active' : currentTab === 2 })}>
                  <img src={SizeTutorial} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CategorySection title="SẢN PHẨM XEM CÙNG" link="/category/san-pham-ban-chay" dataProduct={mockupDataHot} isSlider={true} />
      </div>
    </div>
  )
}
