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
      <Page name="SchedulePageDetailDaKham1Buoi" className='schedule-detail'>
        <Navbar title="Chi tiết lịch khám " backLink="Back">
</Navbar>
<Toolbar bottom className='button-bottom'>
<Button href='/goi-kham-detail/' fill className='width-100' color="primary">Đặt khám lại</Button>
</Toolbar>
<Block className='block-none box-white'>
<Card className="demo-card-header-pic card-pic box-shadow-0 card-guide">
<CardContent>
<List mediaList className='list-default no-margin'>
<ListItem className='align-items-center bg-guide border-radius-4' link="/ket-qua-kham/" title="Xem kết quả khám" >
<img slot="media" className='ava-48' src="assets/vivnpay/demo/ic-calendar.png" width="48" height="48" />
</ListItem>
</List>

</CardContent>
</Card>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin list-cols search-list'>
<ListItem className='accordion-item-opened' accordionItem>
  <Row slot='title' noGap>
  <Col className='white-space-normal'><div className="medium title">Thông tin đặt khám</div></Col>
  </Row>
        <AccordionContent>
        <List className='list-cont'>
<ListItem title="Tên gói khám" after="Gói khám tổng quát"></ListItem>
<ListItem title="Bệnh viện" after="Bệnh viện hữu nghị Việt Đức"></ListItem>
<ListItem className='align-items-start' title="Địa chỉ" after="22 Láng Hạ"></ListItem>
</List>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin list-cols search-list'>
<ListItem className='accordion-item-opened' accordionItem>
  <Row slot='title' noGap>
  <Col className='white-space-normal'><div className="medium title">Thông tin người khám</div></Col>
  </Row>
        <AccordionContent>
        <List className='list-cont'>
<ListItem title="Họ và tên" after="Nguyễn Văn A"></ListItem>
<ListItem title="Giới tính" after="Nam"></ListItem>
<ListItem title="Ngày/tháng/năm sinh" after="04/07/1994"></ListItem>
<ListItem title="Số điện thoại " after="0948807484"></ListItem>
<ListItem className='align-items-start' title="Địa chỉ" after="Số 24 ngõ 154 Lĩnh Nam, Phường Lĩnh Nam, Quận Hoàng Mai, Hà Nội"></ListItem>
</List>
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin list-cols search-list'>
      <ListItem className='accordion-item-opened' accordionItem>
  <Row slot='title' noGap>
  <Col className='white-space-normal'><div className="medium title">Mô tả triệu chứng</div></Col>
  </Row>
        <AccordionContent>
        <Block>
          <p></p>
          <p>Mắt cá chân sưng to, tấy. Di chuyển khó khăn</p>
          <Block className='space'></Block>
        </Block>        
        </AccordionContent>
      </ListItem>
    </List>
</Block>
<Block className='block-none box-white'>
<List accordionList className='no-margin list-cols search-list'>
      <ListItem className='accordion-item-opened' accordionItem>
  <Row slot='title' noGap>
  <Col width={60} className='white-space-normal'><div className="medium title">Thông tin thanh toán</div></Col>
  <Col width={40} className='col-right-auto'>
  <span className="badge color-success medium">Đã thanh toán</span>
</Col>
  </Row>
        <AccordionContent>
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
        </AccordionContent>
      </ListItem>
    </List>
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