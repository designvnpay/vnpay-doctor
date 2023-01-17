import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,NavLeft,
    List,
    ListItem,BlockTitle,Chip,
    Button,Toolbar,
    Block,Row,Col,
    Card,Sheet,
  CardHeader,
  CardContent,
  ListInput,PageContent,
  Toggle
  } from 'framework7-react';
  export default class extends React.Component {
    render() {
      return (
        <Page onPageBeforeIn={this.onPageBeforeIn.bind(this)} onPageInit={this.onPageInit.bind(this)} name="SchedulePageDetail" className='schedule-detail page-tran'>
      <Navbar large sliding={false} className='header-tran navbar-show-title'>
<NavLeft>
<Link href="/schedule/"><Icon icon="icon24 icons-ic24px-back filter-white"></Icon></Link>
</NavLeft>
<NavTitle className='text-center' color='white'>
Chi tiết lịch khám
</NavTitle>
</Navbar>
<Toolbar bottom className='button-bottom'>
<Button fill className='width-100' href="/schedule/" color="danger">Hủy lịch khám</Button>
</Toolbar>
<Block className='block-none box-white'>
<Card className="demo-card-header-pic card-pic box-shadow-0 card-guide">
<CardHeader className="no-border bg_card_top" valign="bottom">
<div className='box-qr text-center'>
<div className='box-white padding-12 border-radius-8 mb5'>
<div className='qr'>
<img src="assets/vivnpay/svg/icon/qr.svg" width="136" height="136" />
</div>          
</div>
<div className='color-white font-size-12 mb12'>
Mã hẹn khám
</div>
<Row className='mb12'>
  <Col>
  <Button fill color='black' small className='inline-block'><span className='button-txt'>208132</span> <Icon icon="icon20 icons-ic24px-copy filter-white"></Icon></Button>
  </Col>
</Row>          
<Row noGap className='item-time'>            
<Col className='col-left line-right'>
<Button fill color='white-light'><Icon icon="icon24 icons-ic24px-calendar filter-white"></Icon> <span className='button-txt'>12/08/2022</span></Button>
</Col>
<Col className='col-right'>
<Button fill color='white-light'><Icon icon="icon24 icons-ic24px-clock filter-white"></Icon> <span className='button-txt'>10-11 giờ</span></Button>
</Col>
</Row>
</div>        
</CardHeader>
<CardContent>
<List mediaList className='list-default no-margin'>
<ListItem className='align-items-center bg-guide border-radius-4' link="/huong-dan-di-kham/" title="Hướng dẫn đi khám" >
<div className="item-text font-size-14">Điều cần biết khi đi khám</div>
<img slot="media" className='ava-48' src="assets/vivnpay/svg/icon/ic_guide.svg" width="48" height="48" />
</ListItem>
</List>

</CardContent>
</Card>
</Block>
<Block>
<Button fill className='open-prompt' onClick={prompt}>Prompt</Button>
<Button fill onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
</Block>
<Block className='block-none box-white'>
<Card className="card-pic box-shadow-0">
<CardHeader className="no-border align-items-center">
<Col className='white-space-normal'><div className="medium title">Thông tin người khám</div></Col>
<Col><Link className='font-size-14 regula' sheetOpen=".sheet-save-info">Lưu  thông tin</Link></Col>
</CardHeader>
<CardContent>
<List className='list-cont'>
<ListItem title="Họ và tên" after="Nguyễn Văn A"></ListItem>
<ListItem title="Giới tính" after="Nam"></ListItem>
<ListItem title="Ngày/tháng/năm sinh" after="04/07/1994"></ListItem>
<ListItem title="Số điện thoại " after="0948807484"></ListItem>
<ListItem className='align-items-start' title="Địa chỉ" after="Số 24 ngõ 154 Lĩnh Nam, Phường Lĩnh Nam, Quận Hoàng Mai, Hà Nội"></ListItem>
</List>
</CardContent>
</Card>
</Block>
<Block className='block-none box-white'>
<Card className="card-pic box-shadow-0">
<CardHeader className="no-border align-items-center">
<Col className='white-space-normal'><div className="medium title">Thông tin đặt khám</div></Col>
</CardHeader>
<CardContent>
<List className='list-cont'>
<ListItem title="Bác sĩ" after="Bsy. Nguyễn Thanh Trung"></ListItem>
<ListItem title="Chuyên khoa" after="Tai Mũi Họng"></ListItem>
<ListItem title="Bệnh viện" after="Bệnh viện hữu nghị Việt Đức"></ListItem>
<ListItem title="Thời gian khám" after="21/04/2022 09:45 "></ListItem>
<ListItem title="Dịch vụ bảo hiểm" after="Bảo hiểm tự nguyện"></ListItem>
<ListItem className='listitem-total' title="Phí dịch vụ">
<div className="item-after"><span>500,000<sub>đ</sub></span></div>
</ListItem>
</List>
</CardContent>
</Card>
</Block>
<Block className='block-none box-white'>
<Card className="card-pic box-shadow-0">
<CardHeader className="no-border align-items-center">
<Col className='white-space-normal'><div className="medium title">Thông tin thanh toán</div></Col>
<Col>
<Chip className='chip-small' outline text="Đã thanh toán" color="green" />
</Col>
</CardHeader>
<CardContent>
<List className='list-cont'>
<ListItem title="Thời gian giao dịch" after="09:45 21/04/2022"></ListItem>
<ListItem title="Mã giao dịch" after="">
<div className="item-after">
<Button small className='padding-right-0'><span className='button-txt'>VNPD-2022000051</span> <Icon icon="icon20 icons-ic24px-copy"></Icon></Button>
</div>
</ListItem>
<ListItem title="Phí dịch vụ">
<div className="item-after"><span>500,000<sub>đ</sub></span></div>
</ListItem>
<ListItem title="Giảm giá">
<div className="item-after"><span>-500,000<sub>đ</sub></span></div>
</ListItem>
<ListItem title="Tổng tiền thanh toán" className='listitem-total'>
<div className="item-after item-after-custom">
<span className='display-block'>500,000<sub>đ</sub></span>
<span className="item-text display-block">Giá đã bao gồm VAT</span>
</div>
</ListItem>
</List>
</CardContent>
</Card>
</Block>
</Page>

      )
    }
    onPageBeforeIn() {
      // do something on page before in
    }
    // On off
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    // On off end
  
    onPageInit() {
      // do something on page init

    }
  }