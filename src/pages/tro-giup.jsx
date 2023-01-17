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
    <Navbar title="Trợ giúp" backLink="Back">
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
    <BlockTitle>
        <Row>
        <Col width="70" className='white-space-normal font-size-16'>Câu hỏi thường gặp</Col>
        <Col width="30" className='text-right'><Link className='font-size-14 regula'>Xem tất cả</Link></Col>
        </Row>
      </BlockTitle>
<List accordionList className='no-margin list-help search-list'>
<ListItem className='accordion-item-opened' accordionItem title="VNCare có phải là một bệnh viện, hay phòng khám không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Không.
</p><p>
VNCare là Nền tảng Y tế Chăm sóc sức khỏe toàn diện kết nối người dùng đến với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả và tin cậy.
</p><p>
VNCare kết nối mạng lưới đối tác có nền tảng bác sĩ giỏi ở nhiều bệnh viện, phòng khám khác nhau. "
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Tôi bận việc nên đến muộn khoảng 30 phút so với Giờ đã hẹn có được không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Nếu bạn có việc và đến muộn hơn giờ đặt hẹn, bạn vui lòng báo cho VNCare để tránh ảnh hưởng đến quyền lợi của bạn khi bạn đến khám và để VNCare sắp xếp lịch hẹn cho các bệnh nhân khác.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Tôi đã đặt khám qua VNCare, vậy có cần làm lại thủ tục khám khi đến bệnh viện/phòng khám không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Bạn cần đến bộ phận tiếp đón tại nơi đến khám để kiểm tra thông tin một lần nữa trước khi vào khám với bác sĩ.
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