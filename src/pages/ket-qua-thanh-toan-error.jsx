import React from 'react';
import {
    Page,
    Navbar,NavRight,
    List,
    ListItem,
    Button,Toolbar,NavTitle,
    Block,Row,Col,
    Card,Icon,BlockTitle,
  CardHeader,Link,
  CardContent
  } from 'framework7-react';

const KetquaThanhtoan = () => (
            <Page name="KetquaThanhtoan" className='page-result'>
              <Navbar large className='header-tran navbar-show-title'>
              <NavTitle className='text-center'>
    Kết quả đặt khám
    </NavTitle>
                <NavRight>  
    <Link href="/"><Icon icon="icon24 icons-ic24px-home"></Icon></Link>
    </NavRight>
                </Navbar>
  <Block className='mt10'>
      <Card className="card-pic">
      <CardHeader className=" display-block text-center">
      <Row className='icon-result'><Col><Icon icon="icon36 icons-ic24px-status-error"></Icon></Col></Row>
      <Row className='title'><Col>Đặt khám không thành công</Col></Row>      
      <Row className='line'></Row>     
      </CardHeader>
      <CardContent>
        <p>
        Có lỗi trong quá trình xuất vé. Nếu Quý khách không nhận được email xuất vé vui lòng liên hệ tống đài <span className='color-primary'>*6789</span> để được hỗ trợ. Xin cảm ơn!
        </p>
        <p className='mb0 pt5'><Button className='width-100' href="/dat-lich-kham/" fill color="primary-light">Đặt lại lịch khám</Button></p>

      <Block className='space'></Block>
      <Block className='space'></Block><Block className='space'></Block>
      </CardContent>
    </Card>
      </Block>
      <Block>
      
      </Block>
      <Block></Block>
  </Page>
);
export default KetquaThanhtoan;