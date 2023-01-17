import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    List,Radio,
    ListItem,
    Button,Toolbar,
    Tabs,
    Tab,
    Block,Row,Col,
    Card,
  CardHeader,
  CardContent,
  } from 'framework7-react';

const DatLichKham = () => (
            <Page name="DatLichKham" className='dat-lich-kham'>
                <Navbar title="Đặt lịch khám" backLink="Back">
</Navbar>
    <Toolbar bottom className='button-bottom'>
          <Col>
            <div className='font-size-12'>Thời gian khám</div>
            <div className='semibold color-primary'>Thứ 4, 20/08 08:00 </div>
            </Col>
            <Col resizable style={{ minWidth: '48%' }}>
            <Button href="/thong-tin-dat-kham/" fill color="primary-light">Tiếp tục</Button>
            </Col>            
  </Toolbar>   
  <List mediaList className="search-list searchbar-found search-list-style block-none">
  <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="assets/vivnpay/demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col className='text-left'>
            <div className='font-size-14'>Phí dịch vụ</div>            
            </Col>
            <Col className='text-right'>
            <div className='medium color-primary'>560,000<sub>đ</sub></div>
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
      <CardHeader className="no-border justify-content-start">
      <Icon icon="icon24 icons-ic24px-weather-morning"></Icon> <span className="medium title">Buổi sáng</span>   
      </CardHeader>
      <CardContent className='p3 list-mb-16'>
    <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20 min-height-44'
            radio
            defaultChecked
            name="media-radio2"
            value="1"
            title="08:00"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="08:15"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="08:30"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="08:45"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="09:00"       
        ></ListItem>
    </List>
    <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="1"
            title="09:15"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="09:30"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="09:45"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            disabled
            name="media-radio2"
            value="2"
            title="10:00"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="10:15"       
        ></ListItem>
    </List>
    <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="1"
            title="10:30"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="10:45"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="11:00"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="11:15"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="11:30"       
        ></ListItem>
    </List>
    <List mediaList className='list-col-justify list-radio'>
    <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="1"
            title="11:45"       
        ></ListItem>
    </List>
      </CardContent>
    </Card>
    <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border justify-content-start">
      <Icon icon="icon24 icons-ic24px-weather-afternoon"></Icon> <span className="medium title">Buổi chiều</span>   
      </CardHeader>
      <CardContent className='p3 list-mb-16'>
    <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20 min-height-44'
            radio
            defaultChecked
            name="media-radio2"
            value="1"
            title="13:30"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="13:45"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="14:00"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="14:15"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="14:30"       
        ></ListItem>
    </List>
    <List mediaList className='list-col-justify list-radio'>
      <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="1"
            title="14:45"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="15:00"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="15:15"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            disabled
            name="media-radio2"
            value="2"
            title="15:30"       
        ></ListItem>
        <ListItem className='col-20 min-height-44'
            radio
            name="media-radio2"
            value="2"
            title="15:35"       
        ></ListItem>
    </List>
      </CardContent>
    </Card>
    <div className='space'></div>
      </Block>
  </Page>
);
export default DatLichKham;