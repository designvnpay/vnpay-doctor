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
          title: 'Thông báo',
          text: 'Quý khách có chắc chắn muốn hủy lịch khám?',
          content:'<div class="dialog-input-field input"><input type="text" name="dialog-name" placeholder="Nhập lý do" class="dialog-input"></div><div class="dialog-input-field input font-size-12">Bằng việc nhấn "Xác nhận", Quý khách sẽ đồng ý với <a class="link sheet-open underline close-dialog" href="#" data-sheet=".sheet-chinh-sach">chính sách hoàn hủy</a> của chúng tôi.</div><div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button-bor color-main button" href="#"><span class="button-txt">Hủy</span></a><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Xác nhận</span></a></p></div>',

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
<Row className='mb12'>
  <Col>
  <Button onClick={ToastCopy} fill color='black' small className='inline-block'><span className='button-txt'>208132</span> <Icon icon="icon20 icons-ic24px-copy filter-white"></Icon></Button>
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
            <Block className='color-sub font-size-14'>
              <p>
                <b className='semibold color-main'>1. Trường hợp khách hàng chủ động yêu cầu hủy lịch </b>
              </p>
              <p className='color-main'>1.1. Đối với Dịch vụ "Đặt khám theo Cơ sở y tế" - chuyên khoa tư vấn tâm lý & Dịch vụ "Tư vấn từ xa" - chuyên khoa tư vấn tâm lý:
 </p><p>
 </p><p>- Yêu cầu hủy lịch &lt;1 tiếng trước giờ hẹn khám: Phí hủy là 100% giá trị đơn hàng (Khách hàng không được hoàn lại phí)
- Yêu cầu hủy lịch &gt;1 tiếng trước giờ hẹn khám: Phí hủy là 50% giá trị đơn hàng (Khách hàng được hoàn 50% giá trị đơn hàng)</p>

<p className='color-main'>1.2. Đối với Dịch vụ "Đặt khám theo Cơ sở y tế" - không bao gồm chuyên khoa tư vấn tâm lý & Dịch vụ "Đặt khám theo Gói khám"</p>
<p>- Yêu cầu hủy lịch &lt;1 tiếng trước giờ hẹn khám: Phí hủy là 50.000 VNĐ/lần đặt khám 
</p><p>
- Yêu cầu hủy lịch &gt;1 tiếng giờ giờ hẹn khám: Không phát sinh phí hủy (Khách hàng được hoàn 100% chi phí)</p>

<p className='color-main'>1.3. Đối với dịch vụ "Tư vấn từ xa" - không bao gồm chuyên khoa tư vấn tâm lý</p>
<p>- Yêu cầu hủy lịch &lt;1 tiếng trước giờ hẹn khám: Phí hủy là 50% giá trị đơn hàng (Khách hàng được hoàn 50% giá trị đơn hàng)
</p><p>
- Yêu cầu hủy lịch &gt;1 tiếng giờ giờ hẹn khám: Không phát sinh phí hủy (Khách hàng được hoàn 100% chi phí)</p>

<p className='color-main'>Lưu ý:</p>
<p>- "Giờ hẹn khám": là thời gian khách hàng chọn để gặp khám với bác sĩ
</p><p>- Chi phí sẽ được hoàn lại trong vòng 5 – 10 ngày làm việc (không tính thứ 7, Chủ Nhật)
</p><p>- Thời gian Khách hàng yêu cầu hủy được xác định bởi:
</p><p>  + Thời gian Khách hàng gọi điện lên tổng đài của VNPAY (*6789); hoặc
</p><p> + Thời gian VNPAY nhận được yêu cầu hủy Đơn hàng của Khách hàng trên hệ thống của VNPAY</p>

<p><b className='semibold color-main'>2. Trường hợp bác sĩ từ chối nhận khám (tình trạng bệnh không phù hợp khám từ xa/ không đúng chuyên môn của bác sĩ,...)</b></p>
<p>VNPAY phải nỗ lực phối hợp với Cơ sở y tế để tìm dịch vụ thay thế tương đồng nhất hoặc tốt hơn cho Khách hàng. Nếu Khách hàng không đồng ý với dịch vụ thay thế, Bên A hoàn trả 100% giá trị Đơn hàng Khách hàng đã đặt mua.</p>
<p className='color-main semibold'>3. Trường hợp bất khả kháng</p>
<p>Nếu lịch hẹn khám bị hủy bỏ hoặc thay đổi bởi một trong hai bên vì một lý do bất khả kháng (hỏa hoạn, thời tiết, tai nạn, thiên tai, chiến tranh,...), thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào. Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất khả kháng.</p>
             

            </Block>          
        </PageContent>
      </Sheet>
</Page>
    )
  }