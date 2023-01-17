import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    List,Radio,
    ListItem,
    Button,
    Sheet,Toolbar,PageContent,
    Block,Row,Col,
    Card,
  CardHeader,
  CardContent,
  } from 'framework7-react';

const DatLichKhamGoi = () => (
            <Page name="DatLichKhamGoi" className='dat-lich-kham bg-white'>
                <Navbar title="Đặt lịch khám" backLink="Back">
</Navbar>
    <Toolbar bottom className='button-bottom'>
          <Col>
            <div className='font-size-12'>Thời gian khám</div>
            <div className='semibold color-primary'>Thứ 4, 20/08 08:00 </div>
            </Col>
            <Col resizable style={{ minWidth: '48%' }}>
            <Button href="/thong-tin-dat-kham-goi/" fill color="primary-light">Tiếp tục</Button>
            </Col>            
  </Toolbar>
  <List mediaList className='list-top'>
    <ListItem title="Bệnh viện Bạch Mai" >
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="24" />
        </ListItem>
</List>
  <List mediaList className="search-list searchbar-found search-list-style block-none">
  <ListItem>
  <div slot='title' className="title regula white-space-normal">Khám sức khỏe tổng quát cơ bản cho nam</div>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col className='text-left'>
            <div className='font-size-12'>Giá gói</div>            
            </Col>
            <Col className='text-right'>
            <div className='medium color-primary'>2,020,000<sub>đ</sub></div>
            </Col>            
          </Row>
      </ListItem>
  </List>
      <Block className='block-none box-white'>
      <Card className="card-pic card-calendar box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <div className="medium title">Chọn lịch khám</div>   
      </CardHeader>
      <CardContent className='p3 list-mb-16'>
      <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20'
        radio
        defaultChecked
        name="media-radio"
        value="1"
        title="Thứ 4"
        subtitle="20/08"        
      ></ListItem>
      <ListItem className='col-20'
        radio
        name="media-radio"
        value="2"
        title="Thứ 5"
        subtitle="20/08"        
      ></ListItem>
      <ListItem className='col-20'
        radio
        name="media-radio"
        value="3"
        title="CN"
        subtitle="20/08"        
      ></ListItem>
      <ListItem className='col-20'></ListItem><ListItem className='col-20'></ListItem>
    </List>
      </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
    <Card className="card-pic box-shadow-0">
      <CardContent className='p3 list-mb-16'>
    <List mediaList className='no-margin list-radio-vertical'>
    <ListItem className='col-100 mb16'
            radio
            defaultChecked
            name="media-radio2"
            value="1"
            title="Buổi sáng"
        >
          <Icon slot='before-title' icon="icon24 icons-ic24px-weather-morning"></Icon>
        </ListItem>
        <ListItem className='col-100'
            radio
            defaultChecked
            name="media-radio2"
            value="1"
            title="Buổi chiều"
        >
          <Icon slot='before-title' icon="icon24 icons-ic24px-weather-afternoon"></Icon>
        </ListItem>
    </List>
      </CardContent>
    </Card>
    <div className='space'></div>
      </Block>
      <Sheet
        className="sheet-default"
        style={{ height: 'auto', '--f7-sheet-bg-color': '#fff' }}
        swipeToClose
        backdrop
      >
        <Toolbar>
        <List mediaList className="search-list sheet-list searchbar-found text-no-ellipsis">
        <ListItem title="Khám sức khỏe tổng quát cơ bản cho nam" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link slot='after' sheetClose><Icon icon="icon24 icons-ic24px-close"></Icon></Link>
      </ListItem>
      </List>
        </Toolbar>
        <Toolbar bottom className='button-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className='semibold color-primary'>2,020,000<sub>đ</sub> </div>
            </Col>
            <Col resizable style={{ minWidth: '48%' }}>
            <Button href="/dat-lich-kham-goi/" fill color="primary" sheetClose>Đặt khám</Button>
            </Col>            
  </Toolbar>
        {/*  Scrollable sheet content */}
        <PageContent>
            <Block className='color-sub pt10 mb32'>
            <p>Gói khám bao gồm: Khám lâm sàng tổng quát, Chụp Xquang ngực, siêu âm ổ bụng, siêu âm tuyến giáp, xét nghiệm 07 chỉ số sinh hóa, xét nghiệm nước tiểu</p>
            <p>Gói khám bao gồm: Khám lâm sàng tổng quát, Chụp Xquang ngực, siêu âm ổ bụng, siêu âm tuyến giáp, xét nghiệm 07 chỉ số sinh hóa, xét nghiệm nước tiểu</p>
            <p>Gói khám bao gồm: Khám lâm sàng tổng quát, Chụp Xquang ngực, siêu âm ổ bụng, siêu âm tuyến giáp, xét nghiệm 07 chỉ số sinh hóa, xét nghiệm nước tiểu</p>           
            <Block className='space'></Block>

            </Block>          
        </PageContent>        
      </Sheet>
  </Page>
);
export default DatLichKhamGoi;