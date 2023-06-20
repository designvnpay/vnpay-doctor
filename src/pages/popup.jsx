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
Subnavbar,
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
    const PopupLichKham1 = () => {
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
      const PopupLichKham2 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            //text: '',
            content:'<div class="icon-noty"><i class="icon icon64 icons-ic64px-status-successful"></i></div> <div class="title-noty">Thông báo</div><div class="mb24 text-noty">Đặt lịch khám thành công</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Đồng ý</span></a></p></div>',
  
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
      const PopupLichKham3 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            title: 'Thông báo',
            //text: '',
            content:'<div class="dialog-input-field input mb24">Số lần được phép đổi lịch của Quý khách đã hết!</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',
  
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
      const PopupLichKham4 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            title: 'Thông báo',
            //text: '',
            content:'<div class="dialog-input-field input mb24">Lịch khám đang được chúng tôi xử lý. Liên hệ tổng đài <b class="color-primary">*6789</b> để được hỗ trợ.</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',
  
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
      const PopupLichKham5 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            title: 'Thông báo',
            //text: '',
            content:'<div class="dialog-input-field input mb24">Có lỗi trong quá trình xử lý, quý khách vui lòng thử lại sau. Hoặc liên hệ tổng đài <b class="color-primary">*6789</b> để được hỗ trợ.</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',
  
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
      const PopuphuyLichKham1 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            title: 'Xác nhận hủy lịch khám',
            //text: '',
            content:'<div class="dialog-input-field text-left input">Quý khách sẽ được hoàn tiền theo <a class="link display-init sheet-open underline close-dialog" href="#" data-sheet=".sheet-chinh-sach">chính sách hoàn hủy</a> của NCCDV.</div><div class="dialog-input-field input"><input type="text" name="dialog-name" placeholder="Nhập lý do hủy" class="dialog-input"></div><div class="dialog-input-field input hotline-text text-left">Mọi thắc mắc xin vui lòng liên hệ theo Hotline <b class="color-primary">*6789</b></div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button-bor color-main button" href="#"><span class="button-txt">Hủy</span></a><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',
  
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
      const PopuphuyLichKham2 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            title: 'Thông báo',
            //text: '',
            content:'<div class="dialog-input-field input mb24">Yêu cầu Hủy dịch vụ của quý khách đang được xử lý. Quý khách vui lòng liên hệ <b class="color-primary">*6789</b> nếu cần hỗ trợ thêm.</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',
  
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
      const PopuphuyLichKham3 = () => {
        f7.dialog.create({
            cssClass:'dialog-custom',
            closeByBackdropClick: true,
            //text: '',
            content:'<div class="icon-noty"><i class="icon icon64 icons-ic64px-status-successful"></i></div> <div class="title-noty">Thông báo</div><div class="mb24 text-noty">Hủy dịch vụ thành công</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Đồng ý</span></a></p></div>',
  
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
      <Page name="Popup" className='schedule-detail'>
        <Navbar title="Popup" backLink="Back">
</Navbar>
<BlockTitle className='mb24'>Popup - Đổi lịch khám</BlockTitle>
<Block>
<Button fill className='width-100' onClick={PopupLichKham1}>Đổi lịch khám thành công</Button> 
</Block>
<Block>
<Button fill className='width-100' onClick={PopupLichKham2}>Đặt lịch khám thành công</Button> 
</Block>
<Block>
<Link className='font-size-14 color-main' onClick={PopupLichKham3}>Số lần được phép đổi lịch của Quý khách đã hết!</Link> 
</Block>
<Block>
<Link className='font-size-14 color-main' onClick={PopupLichKham4}>Lịch khám đang được chúng tôi xử lý. Liên hệ tổng đài *6789 để được hỗ trợ.</Link> 
</Block>
<Block>
<Link className='font-size-14 color-main' onClick={PopupLichKham5}>Có lỗi trong quá trình xử lý, quý khách vui lòng thử lại sau. Hoặc liên hệ tổng đài *6789 để được hỗ trợ.</Link> 
</Block>

<BlockTitle className='mb24'>Popup - Hủy lịch khám</BlockTitle>

<Block>
<Button fill className='width-100' onClick={PopuphuyLichKham1}>Form - Hủy lịch khám</Button> 
</Block>
<Block>
<Link className='font-size-14 color-main' onClick={PopuphuyLichKham2}>Yêu cầu Hủy dịch vụ của quý khách đang được xử lý. Quý khách vui lòng liên hệ *6789 nếu cần hỗ trợ thêm.</Link> 
</Block>
<Block>
<Link className='font-size-14 color-main' onClick={PopuphuyLichKham3}>Hủy dịch vụ thành công</Link> 
</Block>
</Page>
    )
  }