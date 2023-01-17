import React, { useState, useEffect } from 'react';
import {
  f7,
  List,
    ListItem,
    Page,Toolbar,
    Navbar,NavRight,Link,Icon,
    Subnavbar,
    Segmented,
    Button,
    Tabs,
    Tab,
    Block,Row,Col,
    Card,
  CardHeader,
  CardContent,
  CardFooter
  } from 'framework7-react';
  const showToastTop = () => {
    // Create toast
      f7.toast.create({
        cssClass:'toast-top toast-default',
        icon: '<i class="icon icon24 icons-ic24px-status-success"></i>',
        text: 'Xóa danh bạ thành công',
        position: 'top',
        closeTimeout: 1500,
      }).open();
  }

const FavouritePage = () => (
  <Page hideToolbarOnScroll pageContent={false} name="FavouritePage" className='favouritepage'>
  <Navbar title="Danh sách yêu thích" backLink="Back">
    <Subnavbar>
      <Segmented raised>
        <Button tabLink="#favourite-tab1" tabLinkActive>
        Bác sĩ
        </Button>
        <Button tabLink="#favourite-tab2">Cơ sở y tế</Button>
      </Segmented>
    </Subnavbar>
    <NavRight>
  <Link iconOnly onClick={showToastTop}>
 <Icon icon="icon24 icons-ic24px-delete"></Icon>
  </Link>
</NavRight>
  </Navbar>    
  <Toolbar tabbar labels bottom>
    <Link className='icons-tab icons-tab1' tabLink="#view-home" iconIos="icons-tab1" text="Trang chủ" />
    <Link className='icons-tab icons-tab2' tabLink="#view-schedule" iconIos="icons-tab2" text="Lịch khám" />
    <Link className='icons-tab icons-tab3' tabLink="#view-favourite" tabLinkActive iconIos="icons-tab3" text="Yêu thích" />
    <Link className='icons-tab icons-tab4' tabLink="#view-phonebook" iconIos="icons-tab4" text="Thông tin" />
  </Toolbar>
  <Tabs>
    <Tab id="favourite-tab1" tabActive className="page-content tab-toolbar">
    <Block className='box-blank text-center' style={{
          display:'none',
        }}>
      <p>
      <img src="assets/vivnpay/svg/icon/ic-not-found.svg" width="220" />
      </p>
      <p>
      Chưa có danh sách yêu thích
      </p>
      <p><Button className='inline-block' Link="/" fill>Trang chủ</Button></p>
    </Block>
    <Block className='box-search'>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor">
    <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-heart-active"></Icon></Link>
        <Row slot='root' className='item-bottom item-bottom-button'>
            <Col className='text-center'>
            <Link href="/bac-si-detail/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-heart-active"></Icon></Link>
        <Row slot='root' className='item-bottom item-bottom-button'>
            <Col className='text-center'>
            <Link href="/bac-si-detail/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava5.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-heart-active"></Icon></Link>
        <Row slot='root' className='item-bottom item-bottom-button'>
            <Col className='text-center'>
            <Link href="/bac-si-detail/"><Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Chi tiết</span></Link>
            </Col>            
          </Row>
      </ListItem>
      </List>
    </Block>    
    </Tab>
    <Tab id="favourite-tab2" className="page-content">
    <Block className='mt16'>
    <Link href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
              </div>
              <Link slot='after' className='pic-icon'><Icon icon="icon24 icons-ic24px-heart-active"></Icon></Link>
              
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <div className='medium title'>Bệnh viện Đa khoa Quốc tế Vinmec</div>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng, ...</div>
                </div>
      </CardContent>
      <CardFooter className='align-center'>
        <Icon icon="icon20 icons-ic24px-share2"></Icon> <span className="color-main font-size-14">Đặt khám</span>
      </CardFooter>
    </Card>
    </Link>
    </Block>    
    </Tab>
  </Tabs>
</Page>
);
export default FavouritePage;