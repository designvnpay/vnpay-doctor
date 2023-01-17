import React from 'react';
import {
    Page,Navbar,Link,Icon,Block,Row,Col,Button,
    Searchbar, List,
    ListItem,Sheet,Toolbar,PageContent,
    AccordionContent,
    theme
} from 'framework7-react';

const GoiKhamDetail = () => (
            <Page name="GoiKhamDetail" className='goi-kham-detail page-search bg-white'>
              <Navbar className='show-border' title="Gói khám sức khỏe tổng quát" backLink="Back">
    </Navbar>
    <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bệnh viện"
          searchContainer=".search-list-search"
          searchIn=".item-title"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List accordionList mediaList className="search-list-search list-bor mb0">
    <ListItem accordionItem title="Bệnh viện Bạch Mai" text="3 mục khám" className='accordion-item-opened' >
        <img className='ava' slot="media" src="assets/vivnpay/svg/ava-default.svg" width="40" />
        <AccordionContent>
        <List mediaList className="search-list searchbar-found search-list-style search-list-bor text-no-ellipsis">
        <ListItem title="Khám sức khỏe tổng quát cơ bản cho nam" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho nữ" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail2.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho người lớn tuổi" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail3.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
        </AccordionContent>
      </ListItem>
    </List>
    <List accordionList mediaList className="search-list-search list-bor mb0">
      <ListItem accordionItem title="Bệnh viện Hữu Nghị Việt Đức" text="3 mục khám" >
        <img className='ava' slot="media" src="assets/vivnpay/svg/logo/ava-logo-viet-duc.svg" width="40" />
        <AccordionContent>
        <List mediaList className="search-list searchbar-found search-list-style search-list-bor text-no-ellipsis">
        <ListItem title="Khám sức khỏe tổng quát cơ bản cho nam" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho nữ" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail2.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho người lớn tuổi" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail3.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
        </AccordionContent>
      </ListItem>
    </List>
    <List accordionList mediaList className="search-list-search mb0">
      <ListItem accordionItem title="Bệnh viện Vinmec Times City" text="3 mục khám" >
        <img className='ava' slot="media" src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
        <AccordionContent>
        <List mediaList className="search-list searchbar-found search-list-style search-list-bor text-no-ellipsis">
        <ListItem title="Khám sức khỏe tổng quát cơ bản cho nam" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail1.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho nữ" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail2.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
      <ListItem title="Khám sức khỏe tổng quát cơ bản cho người lớn tuổi" className='align-items-start'>
        <img className='img-48 border-radius-8' slot="media" src="assets/vivnpay/demo/pic-goi-kham-detail3.jpg" width="48" />
        <Link sheetOpen=".sheet-default" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link>
        <Row slot='root' className='item-bottom'>
          <Col>
            <div className='font-size-12'>Giá gói</div>
            <div className="medium color-primary">2,020,000<sub>đ</sub></div>
            </Col>
            <Col className='max-width-110'>
            <Button href="/dat-lich-kham-goi/" fill color="default">Đặt khám</Button>
            </Col>            
          </Row>
      </ListItem>
        
    </List>
        </AccordionContent>
      </ListItem>
    </List>    
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
export default GoiKhamDetail;