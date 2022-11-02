import React from 'react';
import {
    Page,Navbar,Link,Icon,Block,Row,Col,Button,
    Searchbar, List,
    ListItem,
    theme,
} from 'framework7-react';

const ChuyenKhoaDetail = () => (
            <Page name="ChuyenKhoaDetail" className='chuyen-khoa-detail page-search bg-white'>
              <Navbar className='show-border' title="Cơ xương khớp" backLink="Back">
    </Navbar>
    <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bác sĩ"
          searchContainer=".search-list"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list searchbar-found search-list-style search-list-bor">
    <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava3.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava5.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava6.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava7.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Bs. Lê Công Tuấn Anh" subtitle="Cơ xương khớp" text="Bệnh viện Hữu Nghị Việt Đức">
        <img className='ava img-64' slot="media" src="demo/ava4.jpg" width="64" />
        <img className='ava-logo' slot="media" src="svg/logo/ava-logo-viet-duc.svg" width="24" />
        <Link href="/bac-si-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Phí dịch vụ</div>
            <div className='medium color-primary'>560,000đ</div>
            </Col>
            <Col>
            <Button href="/dat-lich-kham/" fill color="default">Đặt lịch khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
    </Block>
  </Page>
);
export default ChuyenKhoaDetail;