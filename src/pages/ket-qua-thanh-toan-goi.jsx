import React, { useState, useEffect } from 'react';
import {
  f7,
    Page,
    Navbar,NavRight,
    List,
    ListItem,
    Button,Toolbar,NavTitle,
    Block,Row,Col,
    Card,Icon,BlockTitle,
  CardHeader,Link,
  CardContent
  } from 'framework7-react';
  const ToastCopy = () => {
    // Create toast
      f7.toast.create({
        cssClass:'toast-top toast-default',
        icon: '<i class="icon icon24 icons-ic24px-status-success"></i>',
        text: 'Sao chép thành công',
        position: 'top',
        closeTimeout: 1500,
      }).open();
  }

const KetquaThanhtoanGoi = () => (
            <Page name="KetquaThanhtoanGoi" className='page-result'>
              <Navbar large className='header-tran navbar-show-title'>
              <NavTitle className='text-center'>
              Kết quả đặt khám
    </NavTitle>
                <NavRight>  
    <Link href="/"><Icon icon="icon24 icons-ic24px-home"></Icon></Link>
    </NavRight>
                </Navbar>
  <Block className='mt10'>
      <Card className="card-pic">
      <CardHeader className=" display-block text-center">
      <Row className='icon-result'><Col><Icon icon="icon36 icons-ic24px-status-success"></Icon></Col></Row>
      <Row className='title mb5'><Col>Thanh toán thành công</Col></Row>
      <Row className='price'><Col><div className="medium color-primary font-size-20">480,000<sub>đ</sub> </div></Col></Row>
      <Row className='color-subtitle font-size-12'><Col>09:45 Thứ tư, 21/04/2022</Col></Row>
      <Row className='line'></Row>     
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Mã thanh toán"><Button onClick={ToastCopy} small className='padding-right-0'><span className='button-txt'>123456</span> <Icon icon="icon20 icons-ic24px-copy"></Icon></Button></ListItem>
      <ListItem title="Gói khám" after="Tai Mũi Họng"></ListItem>
      <ListItem title="Danh mục" after="Khám Tai mũi họng"></ListItem>
      <ListItem title="Khách hàng" after="Nguyễn Văn A"></ListItem>
      <ListItem title="Số điện thoại" after="0948807484"></ListItem>
      </List>
      <Block className='space'></Block>
      <Block className='block-toast'>
      <div className="toast toast-info modal-in">
  <div className="toast-content align-items-start">
    <div className="toast-text">
    <BlockTitle className='font-size-14 no-margin'>Lưu ý:</BlockTitle>
    <p className='mt3 mb0'>Phiếu khám sẽ được gửi về email hoặc số điện thoại đăng ký khi đặt khám của Quý khách.</p>
<p className='mt3 mb0'>
Trong vòng 30 phút sau khi thanh toán thành công, Quý khách không nhận được mã phiếu khám vui lòng liên hệ tổng đài <span className='color-primary'>*6789</span> để được hỗ trợ.</p>
<p className='mt3 mb0'>Xin cảm ơn!</p>
    </div>    
  </div>
</div>
      </Block>
      <Block className='space'></Block><Block className='space'></Block><Block className='space'></Block><Block className='space'></Block>
      <Block>
      <p className='mb0 pt5'><Button className='width-100' href="/schedule-detail/" fill color="primary-light">Thông tin đặt khám</Button></p>
      </Block>
      <Block className='space'></Block><Block className='space'></Block>
      </CardContent>
    </Card>
      </Block>
      <Block className='text-center'>
        <Link className='underline' href="/ket-qua-thanh-toan-error/">Xem màn Kết quả lỗi</Link>
      </Block>
      <Block>
      
      </Block>
      <Block></Block>
  </Page>
);
export default KetquaThanhtoanGoi;