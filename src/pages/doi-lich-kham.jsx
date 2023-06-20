import React, { useState, useEffect } from 'react';
import {
  f7,
    Page,
    Navbar,Link,Icon,NavTitle,NavLeft,
    List,
    ListItem,Chip,
    Button,Toolbar,
    Block,Row,Col,
    Card,Sheet,PageContent,
  CardHeader,
  CardContent,
  AccordionContent,
  BlockTitle
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

  export default () => {
    const onPageBeforeIn = () => {
      
    }
  
    const onPageInit = () => {
      //f7.dialog.alert('Hello world');

      
    }
    const notify = () => {
      f7.dialog.create({
          cssClass:'dialog-custom',
          closeByBackdropClick: true,
          //text: '',
          content:'<div class="icon-noty"><i class="icon icon64 icons-ic64px-status-successful"></i></div> <div class="title-noty">Thông báo</div><div class="mb24 text-noty">Đổi lịch khám thành công</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Đồng ý</span></a></p></div>',

          /*buttons: [
            {
              text: 'Hủy', cssClass:'button-l',
            },
            {
              text: 'Xác nhận',cssClass:'button-r',
            }
          ],*/
          verticalButtons: false,
        }).open();

        /*setTimeout(function () {
          f7.dialog.close();
        }, 3000);*/
    };
  
    return (
        <Page name="DoiLichKham" className='doi-lich-kham'>
        <Navbar className='subtitle-color' title="Đổi lịch khám" backLink="Back" subtitle='Số lần đổi 1/3'>
  </Navbar>
  <Toolbar bottom className='button-bottom'>
  <Col>
    <div className='font-size-12'>Thời gian khám</div>
    <div className='semibold color-primary'>Thứ 4, 20/08 08:00 </div>
    </Col>
    <Col resizable style={{ minWidth: '48%' }}>
    <Button fill color="primary-light" onClick={notify}>Tiếp tục</Button>
    </Col>            
  </Toolbar>   
  <Block className='block-toast box-white'>
  <div className="toast toast-warning modal-in">
  <div className="toast-content align-items-start">
  <div className="toast-text">
  <BlockTitle className='font-size-14 no-margin medium'>Quý khách được đổi lịch tối đa 3 lần</BlockTitle>
  </div>
  </div>
  </div>  
  </Block>
  <Block className='block-none box-white'>
  <Card className="card-pic card-calendar box-shadow-0">
  <CardHeader className="no-border align-items-center">
  <div className="medium title">Chọn lịch khám</div>   
  </CardHeader>
  <CardContent className='p3 list-mb-16'>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20'
  radio
  defaultChecked
  name="media-radio"
  value="1"
  title="Thứ 4"
  subtitle="20/08"        
  ></ListItem>
  <ListItem className='col-20'
  radio
  name="media-radio"
  value="2"
  title="Thứ 5"
  subtitle="20/08"        
  ></ListItem>
  <ListItem className='col-20'
  radio
  name="media-radio"
  value="3"
  title="CN"
  subtitle="20/08"        
  ></ListItem>
  <ListItem className='col-20'></ListItem><ListItem className='col-20'></ListItem>
  </List>
  </CardContent>
  </Card>
  </Block>
  <Block className='block-none box-white'>
  <Card className="card-pic box-shadow-0">
  <CardHeader className="no-border justify-content-start">
  <Icon icon="icon24 icons-ic24px-weather-morning"></Icon> <span className="medium title">Buổi sáng</span>   
  </CardHeader>
  <CardContent className='p3 list-mb-16'>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    defaultChecked
    name="media-radio2"
    value="1"
    title="08:00"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="08:15"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="08:30"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="08:45"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="09:00"       
  ></ListItem>
  </List>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="1"
    title="09:15"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="09:30"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="09:45"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    disabled
    name="media-radio2"
    value="2"
    title="10:00"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="10:15"       
  ></ListItem>
  </List>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="1"
    title="10:30"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="10:45"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="11:00"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="11:15"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="11:30"       
  ></ListItem>
  </List>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="1"
    title="11:45"       
  ></ListItem>
  </List>
  </CardContent>
  </Card>
  <Card className="card-pic box-shadow-0">
  <CardHeader className="no-border justify-content-start">
  <Icon icon="icon24 icons-ic24px-weather-afternoon"></Icon> <span className="medium title">Buổi chiều</span>   
  </CardHeader>
  <CardContent className='p3 list-mb-16'>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    defaultChecked
    name="media-radio2"
    value="1"
    title="13:30"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="13:45"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="14:00"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="14:15"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="14:30"       
  ></ListItem>
  </List>
  <List mediaList className='list-col-justify list-radio'>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="1"
    title="14:45"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="15:00"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="15:15"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    disabled
    name="media-radio2"
    value="2"
    title="15:30"       
  ></ListItem>
  <ListItem className='col-20 min-height-44'
    radio
    name="media-radio2"
    value="2"
    title="15:35"       
  ></ListItem>
  </List>
  </CardContent>
  </Card>
  <div className='space'></div>
  </Block>
  </Page>
    )
  }