import React from 'react';
import {
    Page,
    Navbar,NavRight,Link,Icon,NavTitle,
    List,
    ListItem,
    Button,Toolbar,
    Block,Row,Col,
    Card,Radio,
  CardHeader,
  CardContent,
  ListInput,PageContent,
  Toggle
  } from 'framework7-react';

const ThongTinCuaToi = () => (
            <Page name="ThongTinCuaToi" className='thong-tin'>
                <Navbar title="Thông tin của tôi" backLink="Back">
</Navbar>
    <Toolbar bottom className='button-bottom'>
        <Row className='width-100'>
        <Col width="50">
        <Button backLink="Back" fill color="main" className='button-bor'>Hủy</Button>
            </Col>
            <Col width="50" className='text-right'>
            <Button href="/thong-tin-list/" fill color="primary-light">Lưu</Button>
            </Col>
        </Row>
  </Toolbar>   

  <Block className='block-none box-white mb0'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-form'>
      <ListItem title="Quan hệ" smartSelect smartSelectParams={{
            pageTitle: 'Quan hệ', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Tìm kiếm...',
            /*closeOnSelect:true,
            popupCloseLinkText:'Đồng ý',*/
            
             }}>
        <select name="form" placeholder='Tìm kiếm...'>
        <option value="con" selected>Con</option>
          <option value="bo">Bố</option>
          <option value="me">Mẹ</option>
        </select>
        <div slot='default' className="item-footer pt5">Bỏ trống nếu tạo cho chính mình</div>
      </ListItem>
      <ListInput
        type="text"
        placeholder="Nhập họ và tên"
        defaultValue="Nguyễn Văn A"
        clearButton
      >
        <div slot='label' className="item-title item-label">Họ và tên <span className='clred'>*</span></div>
      </ListInput>
      <ListItem className='label-custom'>
        <div className="item-title item-label">Giới tính <span className='clred'>*</span></div>  
      </ListItem>
      <ListItem className='radio-custom1 radio-custom'
        radio
        radioIcon="start"
        title="Nam"
        name="radio-start"
        defaultChecked
      ></ListItem>
      <ListItem className='radio-custom2 radio-custom'
        radio
        radioIcon="start"
        title="Nữ"
        name="radio-start"
      ></ListItem>
      <ListInput
      label="Ngày tháng năm sinh"
    type="datepicker"
    defaultValue="24/07/1999"
    placeholder="Ngày tháng năm sinh"
    className="icon-right icon-date"
    calendarParams={{openIn: 'sheet',closeOnSelect:true,header: true, title:'Chọn', footer: false, locale:'vi', dateFormat: { month: 'numeric', day: '2-digit', year: 'numeric'}}}
  >
  <span slot='label' className='clred'> *</span>
  </ListInput>

      <ListInput
      label="Số điện thoại"
        type="text"
        defaultValue="0948807484"
        placeholder="Nhập số điện thoại"
        clearButton
        className="icon-right"
      >
        <div className="icons" slot="inner-end">
        <Icon icon="icon24 icons-ic24px-phone"></Icon>
        </div>  
        <span slot='label' className='clred'> *</span>    
      </ListInput>
      <ListInput
        label="Số sổ BHYT"
        type="text"
        placeholder="Nhập số sổ BHYT"
        clearButton
      >        
      </ListInput>
      <ListInput
        label="Email"
        type="text"
        defaultValue="abc@gmail.com"
        placeholder="Nhập email"
        clearButton
      >      
      </ListInput>      
    </List>
    </CardContent>
    </Card>
      </Block>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Địa chỉ</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-form'>      
      <ListItem title="Tỉnh/Thành phố" smartSelect smartSelectParams={{
            pageTitle: 'Tỉnh/Thành phố', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Tỉnh/Thành phố',closeOnSelect:true,
            
             }}>
              <span slot='title' className='clred'> *</span>
        <select name="form" placeholder='Chọn Tỉnh/Thành phố'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>  
      </ListItem>
      <ListItem title="Quận/Huyện" smartSelect smartSelectParams={{
            pageTitle: 'Quận/Huyện', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Quận/Huyện',closeOnSelect:true,
            
             }}>
        <select name="form" placeholder='Chọn Quận/Huyện'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
        <span slot='title' className='clred'> *</span> 
      </ListItem>
      <ListItem title="Phường/Xã" smartSelect smartSelectParams={{
            pageTitle: 'Phường/Xã', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn Phường/Xã',closeOnSelect:true,
            
             }}>
        <select name="form" placeholder='Chọn Phường/Xã'>
        <option value="Option1">Hà Nội</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
        <span slot='title' className='clred'> *</span>
      </ListItem>
      <ListInput
      label="Chi tiết địa chỉ"
        type="textarea"
        defaultValue="Số 01, Đường Nguyễn Trí Thanh, Tổ dân phố Thắng lợi, Phường Thắng Lợi"
        placeholder="Nhập địa chỉ"
        resizable
      >
        <span slot='label' className='clred'> *</span>
      </ListInput>
      <ListItem className='text-no-ellipsis align-items-start listitem-checkbox'
        checkbox        
        name="my-checkbox"
        value="dieu-khoan"
        title="Tôi đồng ý cho phép lưu trữ thông tin cho những lần đặt dịch vụ tiếp theo trên ứng dụng"
      ></ListItem>
    </List>
    <div className='space'></div>

      </CardContent>
    </Card>
      </Block>
  </Page>
);
export default ThongTinCuaToi;