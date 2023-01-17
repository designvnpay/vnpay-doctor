import React, { useState, useEffect } from 'react';
import {
  f7,
    Page,
    Navbar,Link,Icon,
    List,
    ListItem,BlockTitle,Chip,
    Button,Toolbar,
    Block,Col,
    Card,
  CardHeader,
  CardContent
  } from 'framework7-react';

const KetQuaKham = () => (
            <Page name="KetQuaKham" className='ket-qua-kham bg-white'>
                <Navbar backLink="Back" title='Kết quả khám'></Navbar>
      <Block className='box-white'>
      <img src="assets/vivnpay/demo/temp/iframe-ket-qua.svg" width="100%" />
    </Block>
  </Page>
);
export default KetQuaKham;