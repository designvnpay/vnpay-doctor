import React, { useState, useEffect } from 'react';
import {
  f7,
    Page,
    Navbar,Link,Icon,
    List,
    ListItem,BlockTitle,Chip,
    Button,
    Block,Col,
    Card,
  CardHeader,
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

const SchedulePageDetail3 = () => (
            <Page name="SchedulePageDetail3" className='schedule-detail'>
            <Navbar backLink="Back" title='Chi tiết lịch khám'></Navbar>
      <Block className='block-none box-white'>
      <Block className='block-toast box-white'>
      <div className="toast toast-error modal-in">
  <div className="toast-content align-items-start">
    <div className="toast-text toast-custom"><Icon icon="icon24 icons-ic24px-status-error"></Icon>
    <BlockTitle className='font-size-14 no-margin'>Đã hủy lịch khám</BlockTitle>
    </div>
  </div>
</div>  
      </Block>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin người khám</div></Col>
        <Col><Link className='font-size-14 regula' sheetOpen=".sheet-save-info">Lưu  thông tin</Link></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Họ và tên" after="Nguyễn Văn A"></ListItem>
      <ListItem title="Giới tính" after="Nam"></ListItem>
      <ListItem title="Ngày/tháng/năm sinh" after="04/07/1994"></ListItem>
      <ListItem title="Số điện thoại " after="0948807484"></ListItem>
      <ListItem className='align-items-start' title="Địa chỉ" after="Số 24 ngõ 154 Lĩnh Nam, Phường Lĩnh Nam, Quận Hoàng Mai, Hà Nội"></ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin đặt khám</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Bác sĩ" after="Bsy. Nguyễn Thanh Trung"></ListItem>
      <ListItem title="Chuyên khoa" after="Tai Mũi Họng"></ListItem>
      <ListItem title="Bệnh viện" after="Bệnh viện hữu nghị Việt Đức"></ListItem>
      <ListItem title="Thời gian khám" after="21/04/2022 09:45 "></ListItem>
      <ListItem title="Dịch vụ bảo hiểm" after="Bảo hiểm tự nguyện"></ListItem>
      <ListItem className='listitem-total' title="Phí dịch vụ">
      <div className="item-after"><span>500,000<sub>đ</sub></span></div>
      </ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin thanh toán</div></Col>
        <Col>
        <Chip className='chip-small' outline text="Đã thanh toán" color="green" />
        </Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Thời gian giao dịch" after="09:45 21/04/2022"></ListItem>
      <ListItem title="Mã giao dịch" after="">
      <div className="item-after">
      <Button onClick={ToastCopy} small className='padding-right-0'><span className='button-txt'>VNPD-2022000051</span> <Icon icon="icon20 icons-ic24px-copy"></Icon></Button>
      </div>
      </ListItem>
      <ListItem title="Phí dịch vụ">
      <div className="item-after"><span>500,000<sub>đ</sub></span></div>
      </ListItem>
      <ListItem title="Giảm giá">
      <div className="item-after"><span>-500,000<sub>đ</sub></span></div>
      </ListItem>
      <ListItem title="Tổng tiền thanh toán" className='listitem-total'>
      <div className="item-after item-after-custom">
        <span className='display-block'>500,000<sub>đ</sub></span>
        <span className="item-text display-block">Giá đã bao gồm VAT</span>
      </div>
      </ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
  </Page>
);
export default SchedulePageDetail3;