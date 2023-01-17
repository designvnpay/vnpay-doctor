import React, { useState, useEffect } from 'react';
import {
  f7,
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

  const notify_delete = () => {
    f7.dialog.create({
        cssClass:'dialog-custom',
        closeByBackdropClick: true,
        title: 'Thông báo',
        text: 'Quý khách có chắc chắn muốn xóa hồ sơ này',
          content:'<div class="dialog-button dialog-input-field input"><p class="row no-margin"><a class="col close-dialog button-bor color-main button" href="#"><span class="button-txt">Hủy</span></a><a class="col close-dialog button button-fill" href="#"><span class="button-txt">Đồng ý</span></a></p></div>',
      }).open();

      /*setTimeout(function () {
        f7.dialog.close();
      }, 3000);*/
  };

const ThongTinDetail = () => (
            <Page name="ThongTinDetail" className='thong-tin-detail bg-white'>
                <Navbar backLink="Back" title='Thông tin của tôi'></Navbar>
                <Toolbar bottom className='button-bottom'>
        <Row className='width-100'>
        <Col width="50">
        <Button onClick={notify_delete} className='col' fill href="#" color="danger"><Icon icon="icon24 icons-ic24px-delete filter-danger"></Icon> <span className='button-txt'>Xóa</span></Button>
            </Col>
            <Col width="50" className='text-right'>
            <Button className='col' fill href="/thong-tin-cua-toi/"><Icon icon="icon24 icons-ic24px-edit filter-white"></Icon> <span className='button-txt'>Sửa</span></Button>
            </Col>
        </Row>
  </Toolbar>
      <Block className='block-none box-white'>
      <Card className="card-pic box-shadow-0">
      <CardHeader className="no-border align-items-center">
        <Col className='white-space-normal'><div className="medium title">Thông tin</div></Col>
      </CardHeader>
      <CardContent>
      <List className='list-cont'>
      <ListItem title="Họ tên" after="Nguyễn Văn A"></ListItem>
      <ListItem title="Giới tính" after="Nam"></ListItem>
      <ListItem title="Ngày tháng năm sinh" after="04/07/1990"></ListItem>
      <ListItem title="Số điện thoại" after="0948807484"></ListItem>
      <ListItem title="Số sổ bảo hiểm y tế" after="--"></ListItem>
      <ListItem title="Email" after="--"></ListItem>
      <ListItem className='align-items-start' title="Địa chỉ" after="Số 24 ngõ 154 Lĩnh Nam, Phường Lĩnh Nam, Quận Hoàng Mai, Hà Nội"></ListItem>
      </List>
      </CardContent>
    </Card>
      </Block>
  </Page>
);
export default ThongTinDetail;