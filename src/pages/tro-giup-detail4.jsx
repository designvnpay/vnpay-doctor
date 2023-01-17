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
    <Navbar title="Giá và thanh toán" backLink="Back">
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
<ListItem accordionItem title="“Đặt khám miễn phí” nghĩa là gì?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Có nghĩa là VNCare "miễn phí đặt lịch" (không thu phí) khi thực hiện đặt khám qua hệ thống VNCare. Phí khám và các chi phí dịch vụ xét nghiệm, chụp chiếu người bệnh sẽ chi trả trực tiếp theo bảng giá niêm yết tại bệnh viện/phòng khám.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Làm thế nào để tôi biết phí khám của bệnh viện/phòng khám">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Chi phí khám sẽ hiện ngay bên dưới lịch khám của bác sĩ. Ngoài chi phí khám, còn có một số chi phí dịch vụ liên quan đến chuyên khoa của bác sĩ. Các chi phí này đều theo bảng giá niêm yết tại bệnh viện/phòng khám.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Làm thế nào để tôi biết chi phí những dịch vụ liên quan của bệnh viện/phòng khám?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Chi phí dịch vụ hiện ngay bên dưới lịch khám của bác sĩ. Bạn nhấn vào “xem thêm” trên phần Giá khám để biết được chi phí dịch vụ. Các chi phí này đều theo quy định của phòng khám/bệnh viện.
</p><p>
Ngoài các dịch vụ liên quan, trong quá trình thăm khám có thể phát sinh thêm các xét nghiệm khác theo chỉ định của bác sĩ mà chưa có giá thể hiện ở đây. Chúng tôi khuyên bạn nên trao đổi với bác sĩ hoặc nhân viên y tế để biết trước khi đồng ý làm các dịch vụ."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Tôi có cần nộp tiền đặt cọc khi làm thủ tục khám không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Bạn không cần đặt cọc trước cho VNCare. VNCare miễn phí đặt khám và các chi phí bạn chi trả trực tiếp tại phòng khám/bệnh viện.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Đặt khám qua VNCare có đắt hơn/có mất thêm phí gì không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Không. VNCare miễn phí đặt khám. Bạn sẽ chi trả toàn bộ các chi phí khám, chi phí dịch vụ tại bệnh viện/phòng khám - nơi mà bạn đến khám - theo bảng giá niêm yết và được áp dụng như nhau cho bệnh nhân đặt khám qua VNCare hay không đặt qua VNCare
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