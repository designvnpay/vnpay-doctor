import React, { useState, useEffect } from 'react';
import {
  f7,
  Page,
  Navbar,Row,Col,
  List,
  Link,BlockTitle,
  NavRight,Icon,
  AccordionContent,
  Block,ListItem, Searchbar,
  theme,
  Button

} from 'framework7-react';
const notify = () => {
    f7.dialog.create({
        cssClass:'dialog-custom',
        closeByBackdropClick: true,
        title: 'Thông báo',
        text: 'Quý khách muốn thực hiện cuộc gọi tới tổng đài Dịch vụ y tế - <span class="color-primary">*6789</span>',
        content:'<div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button-bor color-main button" href="#"><span class="button-txt">Hủy</span></a><a class="col close-dialog button button-fill" href="tel:*6789"><span class="button-txt">Gọi</span></a></p></div>',

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

export default () => ( 
    
  <Page className='bg-white'>
    <Navbar title="Các câu hỏi khác" backLink="Back">
<NavRight>
    <Link iconOnly>
    <Link onClick={notify}><Icon icon="icon24 icons-ic24px-phone"></Icon></Link>
    </Link>
  </NavRight>
</Navbar>

      
<Block className='block-none box-white'></Block>
<Block className='box-search'>
<Searchbar
        disableButtonText="Hủy"
        placeholder="Quý khách có câu hỏi?"
          searchContainer=".search-list"
          searchIn=".item-content"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List accordionList className='no-margin list-help search-list'>
<ListItem className='accordion-item-opened' accordionItem title="Tại sao giá dịch vụ khám chữa bệnh hiển thị trên VNCare khác với chi phí thực tế tại phòng khám/bệnh viện?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Toàn bộ chi phí khám và chi phí dịch vụ hiện trên các ứng dụng (website, apps) của VNCare đều theo niêm yết tại phòng khám/bệnh viện - nơi mà bác sĩ thăm khám cho người bệnh. Trong quá trình hợp tác giữa VNCare và đối tác nền tảng phòng khám/bệnh viện có thể có sự thay đổi về chính sách giá của phòng khám/bệnh viện mà VNCare chưa cập nhật kịp thời lên các ứng dụng.
</p><p>
Nếu gặp trường hợp này, mong bạn báo lại giúp VNCare, chúng tôi ghi nhận thông tin và nhanh chóng cập nhật lên ứng dụng. VNCare trân trọng cảm ơn bạn."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>	  
	  
</List>
</Block>
<Block className='box-white'>
<BlockTitle className='mb16'>
        <Row>
        <Col className='white-space-normal font-size-16'>Chủ đề câu hỏi</Col>
        </Row>
      </BlockTitle>
      <div class="row row-border-radius">
          <div class="col">
            <Button href="/tro-giup-detail1/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask1"></Icon><span>Về VNCare</span></Button>
          </div>
          <div class="col">
            <Button href="/tro-giup-detail2/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask2"></Icon><span>Hướng dẫn sử dụng</span></Button>
          </div>
        </div>
        <div class="row row-border-radius">
          <div class="col">
            <Button href="/tro-giup-detail3/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask3"></Icon><span>Cơ sở y tế</span></Button>
          </div>
          <div class="col">
            <Button href="/tro-giup-detail4/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask4"></Icon><span>Giá và thanh toán</span></Button>
          </div>
        </div>
        <div class="row row-border-radius">
          <div class="col">
            <Button href="/tro-giup-detail5/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask5"></Icon><span>Bảo hiểm</span></Button>
          </div>
          <div class="col">
            <Button href="/tro-giup-detail6/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask6"></Icon><span>Lợi ích của KH</span></Button>
          </div>
        </div>
        <div class="row row-border-radius">
          <div class="col">
            <Button href="/tro-giup-detail7/" className='button-vertical min-height-116 '><Icon icon="icon56 icons-ask7"></Icon><span>Các câu hỏi khác</span></Button>
          </div>
          <div class="col">
            
          </div>
        </div>
</Block>


  </Page>
    
  
);