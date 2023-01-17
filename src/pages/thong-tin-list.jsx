import React, { useState, useEffect } from 'react';
import {
  f7,
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    List,
    ListItem,
    Button,Toolbar,
    Block,Row,
  } from 'framework7-react';
  const notify_delete = () => {
    f7.dialog.create({
        cssClass:'dialog-custom',
        closeByBackdropClick: true,
        title: 'Thông báo',
        text: 'Quý khách có chắc chắn muốn xóa hồ sơ này',
          content:'<div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button-bor color-main button" href="#"><span class="button-txt">Hủy</span></a><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Đồng ý</span></a></p></div>',
      }).open();

      /*setTimeout(function () {
        f7.dialog.close();
      }, 3000);*/
  };
const ThongTinList = () => (
  <Page name="ThongTinList" className='thong-tin-list'>
    <Navbar title="Thông tin" backLink="Back">
    <NavRight>  
    <Link href="/thong-tin-cua-toi/" className='padding-right-16 font-size-14'><span>Tạo mới</span> <Icon icon="icon20 icons-ic24px-add-active"></Icon></Link>
    </NavRight>
    </Navbar>    
    <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" tabLinkActive iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
  <Block className='box-blank text-center' style={{
          display:'none',
        }}>
      <p>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p className='medium font-size-16 mb12'>
      Quý khách chưa tạo thông tin đặt khám
      </p>
      <p className='color-sub font-size-14 mb24'>Tạo thông tin để đặt lịch khám nhanh hơn và có cơ hội nhận được mã khuyến mãi siêu hấp dẫn!</p>
      <p><Link href="/thong-tin-cua-toi/" className='button button-fill'>Tạo thông tin cho tôi</Link></p>
      <p><Link href="/thong-tin-nguoi-than/" className='button button-fill color-default'>Tạo thông tin cho người thân</Link></p>
    </Block>
    <Block className='box-search'>
    <List mediaList className="search-list search-list-active searchbar-found search-list-style search-list-bor">
    <ListItem title="Phạm Anh Khoa" className='badge-small active'>
        <img className='ava img-48' slot="media" src="assets/vivnpay/svg/icon/ava-default.svg" width="48" />
        <div slot='default' className="item-subtitle"><span className='subtitle-left'>24/07/1983</span> <span className='subtitle-right'>0948807484</span></div>
        <Row slot='root' className='item-bottom item-bottom-button row-border-left'>
        <Link className='col' onClick={notify_delete}><Icon icon="icon20 icons-ic24px-delete"></Icon> <span className="color-main font-size-14">Xóa</span></Link>
        <Link className='col' href="/thong-tin-detail/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>           
          </Row>
      </ListItem>
      <ListItem title="Phạm Anh Khoa" badge="Vợ" badgeColor="danger" className='badge-small'>
        <img className='ava img-48' slot="media" src="assets/vivnpay/svg/icon/ava-default.svg" width="48" />
        <div slot='default' className="item-subtitle"><span className='subtitle-left'>24/07/1983</span> <span className='subtitle-right'>0948807484</span></div>
        <Row slot='root' className='item-bottom item-bottom-button row-border-left'>
        <Link className='col' onClick={notify_delete}><Icon icon="icon20 icons-ic24px-delete"></Icon> <span className="color-main font-size-14">Xóa</span></Link>
        <Link className='col' href="/thong-tin-detail2/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>           
          </Row>
      </ListItem>
      <ListItem title="Phạm Anh Tú" badge="Con" badgeColor="warning" className='badge-small'>
        <img className='ava img-48' slot="media" src="assets/vivnpay/svg/icon/ava-default.svg" width="48" />
        <div slot='default' className="item-subtitle"><span className='subtitle-left'>24/07/1983</span> <span className='subtitle-right'>0948807484</span></div>
        <Row slot='root' className='item-bottom item-bottom-button row-border-left'>
        <Link className='col' onClick={notify_delete}><Icon icon="icon20 icons-ic24px-delete"></Icon> <span className="color-main font-size-14">Xóa</span></Link>
        <Link className='col' href="/thong-tin-detail3/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>           
          </Row>
      </ListItem>
      </List>
    </Block>
  </Page>
);
export default ThongTinList;