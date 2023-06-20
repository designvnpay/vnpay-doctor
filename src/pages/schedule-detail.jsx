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
  
    return (
      <Page onPageBeforeIn={onPageBeforeIn} onPageInit={onPageInit} name="SchedulePageDetail" className='schedule-detail page-tran'>
      <Navbar large sliding={false} className='header-tran navbar-show-title'>
<NavLeft>
<Link className='back'><Icon icon="icon24 icons-ic24px-back filter-white"></Icon></Link>
</NavLeft>
<NavTitle className='text-center' color='white'>
Chi tiết lịch khám 
</NavTitle>
</Navbar>
<Toolbar bottom className='button-bottom'>
<Button fill className='width-100' color="danger" onClick={notify}>Hủy lịch khám</Button>
</Toolbar>
<Block className='block-none box-white'>
<Card className="demo-card-header-pic card-pic box-shadow-0 card-guide">
<CardHeader className="no-border bg_card_top" valign="bottom">
<div className='box-qr text-center'>

{/* <div className='box-white padding-12 border-radius-8 mb5'>
<div className='qr'>
<img src="assets/vivnpay/svg/icon/qr.svg" width="136" height="136" />
</div>          
</div>
<div className='color-white font-size-12 mb12'>
Mã hẹn khám
</div> */}
         
<Row noGap className='item-time'>            
<Col className='col-left line-right'>
<Button fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
</Col>
<Col className='col-right'>
<Button fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
</Col>
</Row> 
</div>        
</CardHeader>
<CardContent>
<List mediaList className='list-default no-margin'>
<ListItem className='align-items-center bg-guide border-radius-4' link="/huong-dan-di-kham/" title="Hướng dẫn đi khám" >
<div className="item-text font-size-14">Điều cần biết khi đi khám</div>
<img slot="media" className='ava-48' src="assets/vivnpay/svg/icon/ic_guide.svg" width="48" height="48" />
</ListItem>
</List>

</CardContent>
</Card>
</Block>
<Block className='block-none box-white'>
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
<ListItem title="Địa chỉ CSYT " after="22 Láng Hạ, Đống Đa, Hà Nội"></ListItem>
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
<ListItem title="Mã thanh toán" after="">
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
<Sheet className="sheet-chinh-sach"
        style={{ height: 'calc(100vh - 2em)', '--f7-sheet-bg-color': '#fff' }}
        swipeToClose
        backdrop
      >
        <Toolbar>
          <div className="left medium">Chính sách hoàn hủy của dịch vụ</div>
          <div className="right">
            <Link sheetClose><Icon icon="icon24 icons-ic24px-close"></Icon></Link>
          </div>
        </Toolbar>
        {/*  Scrollable sheet content */}
        <PageContent>
            <Block className='font-size-14'>
              <p>
                <b className='semibold color-main'>1. Bên B là đơn vị chủ động xử lý các yêu cầu của Khách hàng. </b>
              </p>
              <p className='color-main'>-	Tổng đài chăm sóc Khách hàng của Bên A:  19009204


 </p><p>-	Tổng đài chăm sóc Khách hàng của Bên B:  1900 57 57 20 – 0867 57 57 20</p>

<p className='color-main semibold'>2.	Khách hàng yêu cầu hoàn, hủy dịch vụ Đơn hàng:</p>
<p>Trường hợp Khách hàng yêu cầu hủy Đơn hàng, phí hủy sẽ được quy định như sau:
</p><p>
+ Đối với dịch vụ Bác sĩ tư vấn từ xa – không bao gồm chuyên khoa Tư vấn tâm lý: </p>
<table cellPadding={0} cellSpacing={0}>
  <tr>
    <th className='v-top'>Thời gian khách yêu cầu hủy Đơn hàng</th>
    <th className='v-top'>Phí phạt hủy</th>
  </tr>
  <tr>
    <td>Dưới 12 tiếng trước giờ đặt khám</td>
    <td>50,000 VNĐ/lần đặt khám</td>
  </tr>
  <tr>
    <td>Trên 12 tiếng trước giờ đặt khám</td>
    <td>Không thu phí</td>
  </tr>
</table>
<p>+ Đối với dịch vụ Bác sĩ tư vấn từ xa – chuyên khoa Tư vấn tâm lý và dịch vụ Khám trực tiếp – chuyên khoa Tư vấn tâm lý:</p>
<table cellPadding={0} cellSpacing={0}>
  <tr>
    <th className='v-top'>Thời gian khách yêu cầu hủy Đơn hàng</th>
    <th className='v-top'>Phí phạt hủy</th>
  </tr>
  <tr>
    <td>Dưới 12 tiếng trước giờ đặt khám</td>
    <td>50,000 VNĐ/lần đặt khám</td>
  </tr>
  <tr>
    <td>Trên 12 tiếng trước giờ đặt khám</td>
    <td>Không thu phí</td>
  </tr>
</table>
<p>+ Đối với dịch vụ Khám trực tiếp (không bao gồm chuyên khoa Tư vấn tâm lý) và dịch vụ Gói khám:</p>
<table cellPadding={0} cellSpacing={0}>
  <tr>
    <th className='v-top'>Thời gian khách yêu cầu hủy Đơn hàng</th>
    <th className='v-top'>Phí phạt hủy</th>
  </tr>
  <tr>
    <td>Dưới 12 tiếng trước giờ đặt khám</td>
    <td>50,000 VNĐ/lần đặt khám</td>
  </tr>
  <tr>
    <td>Trên 12 tiếng trước giờ đặt khám</td>
    <td>Không thu phí</td>
  </tr>
</table>
<p>
Thời gian Khách hàng yêu cầu hủy được xác định bởi:</p>
<p>-	Thời gian Khách hàng gọi điện lên tổng đài của Bên B; hoặc
</p><p>-	Thời gian Bên B nhận được yêu cầu hủy Đơn hàng của Khách hàng trên hệ thống của Bên B.
</p>
<p>Trường hợp Khách hàng liên lạc trực tiếp Bên A về các vấn đề hoàn, hủy, khiếu nại Đơn hàng: Bên A không được trực tiếp xử lý yêu cầu của Khách hàng. Sau khi tiếp nhận, Bên A chuyển yêu cầu đến Bên B để Bên B trực tiếp xử lý.</p>

<p>- Phí phạt hủy do khách hàng thanh toán qua bên B sẽ được coi là một loại doanh thu được đối soát cuối tháng cùng các giao dịch thành công và được hai bên A và B hạch toán phí giao dịch theo mức bằng 20% (hai mươi phần trăm) của phí phạt hủy quy định tại Điều 2 Hợp đồng này đến khi có sửa đổi.
</p>

<p><b className='semibold color-main'>3.	Bên A/Cơ sở y tế hủy Đơn hàng</b></p>
<p>Trường hợp Bên A và/hoặc Cơ sở y tế hủy Đơn hàng, Bên A phải nỗ lực phối hợp với Cơ sở y tế để tìm dịch vụ thay thế tương đồng nhất hoặc tốt hơn cho Khách hàng. Nếu Khách hàng không đồng ý với dịch vụ thay thế, Bên A hoàn trả 100% giá trị Đơn hàng Khách hàng đã đặt mua.

</p>
<p className='color-main semibold'>   4. Bồi thường</p>
<p>Trường hợp xảy ra sự cố từ Cơ sở y tế, Bên A có trách nhiệm hỗ trợ khắc phục trong thời gian sớm nhất và có trách nhiệm làm việc với cơ sở y tế xử lý bồi thường cho Khách hàng tùy theo mức độ nghiêm trọng của sự cố.</p>
<p>Trường hợp xảy ra sự cố từ Bên A hoặc bên B, thì bên để xảy ra sự cố sẽ có trách nhiệm hỗ trợ khắc phục trong thời gian sớm nhất và có trách nhiệm bồi thường cho Khách hàng tùy theo mức độ nghiêm trọng của sự cố.</p>

             

            </Block>          
        </PageContent>
      </Sheet>
</Page>
    )
  }