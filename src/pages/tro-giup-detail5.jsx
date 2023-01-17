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
    <Navbar title="Bảo hiểm" backLink="Back">
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
<ListItem className='accordion-item-opened' accordionItem title="Bệnh viện và phòng khám trên VNCare có hỗ trợ thanh toán bảo hiểm y tế không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Tùy thuộc theo bệnh viện/phòng khám.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Bệnh viện và phòng khám ở trên VNCare có bảo lãnh cho bảo hiểm tư nhân không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Tùy thuộc theo bệnh viện/phòng khám. Thông tin về bảo hiểm tư nhân được bảo lãnh trực tiếp tại bệnh viện/phòng khám được xuất hiện ngay bên dưới lịch khám của bác sĩ. Bạn có thể tra cứu danh sách bảo hiểm bảo lãnh trực tiếp tại phần này.
</p><p>
Ngoài ra, để biết được chính xác loại thẻ mà bạn đang sử dụng được bảo lãnh những danh mục nào và bao nhiêu phần trăm, bạn cần mang thẻ bảo hiểm cùng giấy tờ tùy thân đến bệnh viện/phòng khám để được các bạn nhân viên y tế hướng dẫn. Bạn cũng có thể chủ động gọi điện thoại lên công ty bảo hiểm để biết được thông tin này."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Bệnh viện và phòng khám có áp dụng bảo hiểm vào Thứ Bảy và Chủ nhật không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Tùy thuộc vào bệnh viện/phòng khám và tùy thuộc vào loại thẻ bảo hiểm y tế của bạn. Khi đi khám, bạn nên mang theo thẻ bảo hiểm và giấy tờ tùy thân để được nhân viên y tế hướng dẫn.
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