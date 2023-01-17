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
    <Navbar title="Về VNCare" backLink="Back">
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
<ListItem className='accordion-item-opened' accordionItem title="VNCare là gì?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          VNCare là Nền tảng Y tế Chăm sóc sức khỏe kết nối người dùng đến với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả, tin cậy với trên 100 bệnh viện, phòng khám uy tín, chất lượng.
            </p>
            <p>
VNCare kết nối mạng lưới đối tác có nền tảng bác sĩ và cơ sở y tế chuyên khoa. Bệnh nhân dễ dàng lựa chọn đúng dịch vụ y tế với thông tin đã xác thực và đặt lịch nhanh chóng.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="VNCare có phải là một bệnh viện, hay phòng khám không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Không.</p><p>

VNCare là Nền tảng Y tế Chăm sóc sức khỏe toàn diện kết nối người dùng đến với dịch vụ y tế - chăm sóc sức khỏe chất lượng, hiệu quả và tin cậy.
</p><p>
VNCare kết nối mạng lưới đối tác có nền tảng bác sĩ giỏi ở nhiều bệnh viện, phòng khám khác nhau. 
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Mối quan hệ của VNCare với các bệnh viện, phòng khám là gì?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Đối tác hợp tác. 
          </p><p>
VNCare hợp tác với mạng lưới đối tác là nền tảng với bệnh viện/phòng khám, cung cấp các thông tin về khám chữa bệnh tại bệnh viện/phòng khám cho người bệnh để người bệnh có thể dễ dàng lựa chọn bác sĩ phù hợp và đặt lịch nhanh chóng.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="VNCare phù hợp với nhóm bệnh nhân nào?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          <b>VNCare phù hợp với các nhóm bệnh nhân:</b>
          </p><p>
- Bệnh không có tính chất cấp cứu
</p><p>- Bệnh mãn tính cần khám bác sĩ chuyên khoa
</p><p>- Người bệnh biết rõ về tình trạng bệnh của mình
- Mong muốn chủ động đặt lịch đi khám có kế hoạch
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Miễn phí đặt lịch, vậy VNCare thu phí bằng cách nào?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Các đối tác sẽ chi trả chi phí dịch vụ cho VNCare
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