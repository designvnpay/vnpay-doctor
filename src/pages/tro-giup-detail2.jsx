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
    <Navbar title="Hướng dẫn sử dụng" backLink="Back">
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
      <ListItem accordionItem title="Tôi đặt lịch nhiều lần nhưng bận không đi khám được có sao không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Khi muốn thay đổi lịch khám vui lòng báo lại để VNCare hỗ trợ sắp xếp lịch khám giúp bạn và nhường lịch đặt cho bệnh nhân khác
          </p><p>
Nếu bạn hủy lịch mà không thông báo cho VNCare 2 lần liên tiếp, chúng tôi có thể cân nhắc ngừng hỗ trợ đặt khám cho bạn vào lần tiếp theo.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Làm thế nào để đặt lịch khám trên VNCare?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nếu nhập sai thông tin khi đặt lịch, VNCare có thể giúp tôi được không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Có. Bạn vui lòng để lại thông tin cho VNCare trong phần "Hỗ trợ".
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Khi muốn thay đổi /hủy lịch khám, VNCare có thể giúp tôi được không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Có. Bạn vui lòng để lại thông tin cho VNCare trong phần "Hỗ trợ".
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Nếu quên đi khám theo hẹn tôi nên làm thế nào?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          Bạn vui lòng báo lại để VNCare giúp bạn chuyển lịch khám vào ngày khác.
            </p>
          </Block>
        </AccordionContent>
      </ListItem>
	  <ListItem accordionItem title="Tôi muốn hủy lịch khám thì làm như thế nào?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          
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
	  <ListItem accordionItem title="Tôi đã đặt khám qua VNCare, vậy tôi có được khám đúng theo giờ hẹn khám không?">
        <AccordionContent className='color-sub'>
          <Block>
          <p>
          "Chúng tôi phối hợp với bác sĩ, cơ sở y tế để cố gắng hỗ trợ người bệnh được khám theo lịch đã hẹn trước.
</p><p>
Đi khám bác sĩ là một hoạt động đặc thù mà thời gian khám thực tế có thể sai khác với lịch hẹn trước. Việc này xuất phát từ nhiều nguyên nhân khác nhau như là quá tải ở bệnh viện, thời gian khám cho từng bệnh nhân kéo dài hơn dự kiến, bác sĩ cần thêm hội chẩn chuyên môn và có cả sự sắp xếp chưa khoa học ở các cơ sở y tế.
</p><p>
Tuy nhiên, chúng tôi luôn cố gắng cập nhật lịch khám bác sĩ theo thời gian thực và tối ưu hóa qui trình để giảm thiểu thời gian chờ khám của bệnh nhân. Ở một số bác sĩ hoặc cơ sở y tế trên VNCare, bệnh nhân có thể chọn dịch vụ hẹn khám chính xác theo giờ đã hẹn.
</p><p>
Thực tế, đặt khám qua VNCare bạn sẽ được ưu tiên khám trước, giảm thiểu thời gian chờ và đi khám có kế hoạch. "
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