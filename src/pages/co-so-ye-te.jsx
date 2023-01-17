import React from 'react';
import {
  Page,Navbar,NavRight,Link,Icon,Block,
  Card,Searchbar, List,
  ListItem,
  CardHeader,
  CardContent,theme, Button,CardFooter, Row, Col
} from 'framework7-react';

const CoSoYte = () => (
<Page name="CoSoYte" className='cosoyte page-search bg-white'>
<Navbar title="Cơ sở y tế" backLink="Back">

<NavRight>
    <Link className='location-button' href="/dia-diem-search/"><Icon icon="icon24 icons-ic24px-location-active"></Icon>
    <span className="text-location">Hà Nội</span>
    </Link>
  </NavRight>
</Navbar>
    {/* Page content */}
    <Block className='box-search'>
    <Searchbar
        disableButtonText="Hủy"
        placeholder="Tìm kiếm bệnh viện"
          searchContainer=".search-list"
          searchIn=".card"
          disableButton={!theme.aurora}
        ></Searchbar>
        <List className="searchbar-not-found">
      <ListItem title="Không tìm thấy"></ListItem>
    </List>
    <List mediaList className="search-list search-card searchbar-found search-list-style search-list-bor search-list-nopad">
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start '>
      <div className='col color-main'>
                <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/bv-back-mai.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-bach-mai.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
        <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/bv-phu-san.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/img2.png" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/bv-back-mai.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-bach-mai.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
      <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    <ListItem href="/co-so-ye-te-detail/">
    <Card className="card-pic">
      <CardHeader className="no-border no-padding">
      <div className='pic'>
              <img src="assets/vivnpay/demo/bv-phu-san.jpg" width="100%" />
              </div>
              <div className='logo-facilities'>
              <img src="assets/vivnpay/svg/logo/logo-vinmec.svg" width="40" />
              </div> 
      </CardHeader>
      <CardContent className='align-items-start'>
      <div className='col color-main'>
                <Row>
        <Col width="85"><div className='medium title'>Bệnh Viện Bạch Mai</div></Col>
        <Col width="15" className='text-right'><Link href="/co-so-ye-te-detail/" slot='after'><Icon icon="icon24 icons-ic24px-info"></Icon></Link></Col>
        </Row>
                <div className='font-size-12 color-subtitle'>458 Minh Khai, Khu đô thị Times City, Hai Bà Trưng,</div>
                </div>
      </CardContent>
      <CardFooter className="no-border pt0">
        <Button href="/chuyen-khoa/" className="width-100" fill color="default">Đặt khám</Button>
      </CardFooter>
    </Card>
    </ListItem>
    </List>
    </Block>
    

</Page>
);
export default CoSoYte;