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
    <Navbar title="Cơ sở y tế" backLink="Back">
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
<ListItem accordionItem title="Bệnh viện trên VNCare là bệnh viện công hay bệnh viên tư?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Cả hai. VNCare kết nối mạng lưới các đối tác nền tảng có các cơ sơ y tế cả công và tư để người bệnh có nhiều sự lựa chọn t theo chuyên khoa, theo lý do khám hoặc chọn khám theo cơ sở y tế.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Làm thế nào để tôi biết được địa chỉ của bệnh viện/phòng khám?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Địa chỉ phòng khám/bệnh viện nơi bác sĩ thăm khám được hiển thị rõ ràng trong trang thông tin giới thiệu về bác sĩ hoặc hiển thị trong trang giới thiệu về cơ sở y tế.
</p><p>
Ngoài ra sau khi xác nhận đặt khám, VNCare sẽ gửi cho bạn một Hướng dẫn đi khám chi tiết về đường đi đến bệnh viện, phòng khám."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Làm thế nào để tôi biết bệnh viện/phòng khám có trang bị các loại thiết bị gì?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Với từng phòng khám/bệnh viện, VNCare đưa thông tin về chi phí khám của bác sĩ và chi phí dịch vụ liên quan. Chi phí dịch vụ này tương ứng với các loại thiết bị mà phòng khám/bệnh viện hiện có.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Các bệnh viện công lập trên hệ thống có khám vào thứ 7 và chủ nhật không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Một số bệnh viện công lập làm việc vào ngày cuối tuần. Bạn sử dụng công cụ tìm kiếm trên trang chủ của VNCare để vào bệnh viện bạn muốn tìm hiểu và xem thêm thông tin.
</p><p>
Ngoài ra, bạn có thể để lại yêu cầu trên mục ""Hỗ trợ"", đội ngũ của chúng tôi hỗ trợ 7 ngày/tuần để bạn cập nhật thông tin."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Bệnh viện/phòng khám mà VNCare hỗ trợ đặt lịch có nhận khám cho người nước ngoài không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Tùy thuộc từng bệnh viện/phòng khám hoặc bác sĩ bạn đặt khám. Vui lòng để lại thông tin hoặc đặt khám với bác sĩ mong muốn để VNCare hỗ trợ cho bạn. 
</p><p>
Một lưu ý là chi phí khám cho người nước ngoài thường cao hơn vì có thể cần thêm phiên dịch viên hoặc hỗ trợ khám trong quá trình thăm khám."
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="VNCare hỗ trợ đặt lịch khám được với tất cả các bệnh viện/phòng khám đúng không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Không. Hiện tại VNCare hỗ trợ đặt khám với trên 70 bệnh viện/phòng khám công lập và tư nhân tại Hà Nội và Tp. Hồ Chí Minh. Mạng lưới đối tác của chúng tôi luôn tăng trưởng không ngừng.
</p><p>
Bạn vui lòng truy cập trang web và các ứng dụng của VNCare để xem thêm thông tin về các cơ sở y tế đang hỗ trợ đặt khám."
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