import React from 'react';
import {
    Page,
    Navbar,Link,
    Button,Toolbar,
    Block,
  } from 'framework7-react';

const PhonebookPage = () => (
  <Page name="PhonebookPage" className='phonebookpage bg-white'>
    <Navbar title="Thông tin" backLink="Back">
    </Navbar>    
    <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" tabLinkActive iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
  <Block className='box-blank text-center' style={{
          //display:'none',
        }}>
      <p className='mb0'>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p className='medium font-size-16 mb12 mt0'>
      Qúy khách chưa tạo thông tin <span className='display-block'></span>đặt khám
      </p>
      <p className='color-sub font-size-14 mb24'>Tạo thông tin để đặt lịch khám nhanh hơn!</p>
      <p className='mt0'><Link href="/thong-tin-cua-toi/" className='button button-fill'>Tạo thông tin cho tôi</Link></p>
    </Block>
  </Page>
);
export default PhonebookPage;