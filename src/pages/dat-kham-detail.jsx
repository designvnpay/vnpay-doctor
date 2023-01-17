import React from 'react';
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Icon,
  Badge,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Col,
  Button,
  Range,
  Block
} from 'framework7-react';

const DatKhamDetail = () => (
  <Page name="DatKhamDetail">
    <Navbar title="DatKhamDetail" backLink="Back">

    <NavRight>
        <Link iconOnly>
          <Icon ios="f7:person_circle_fill" aurora="f7:person_circle_fill" md="material:person">
            <Badge color="red">5</Badge>
          </Icon>
        </Link>
      </NavRight>
    </Navbar>
      <Row>
          <Col>
          <BlockTitle>Input form</BlockTitle>
          <List>
          <ListInput
        label="Input form"
        type="text"
        placeholder="Input"
        clearButton
      >        
      </ListInput>
      <ListInput
        label="Input icon right"
        type="text"
        placeholder="Input"
        clearButton
        className="icon-right"
      >
        <div className="icons" slot="inner-end">
        <Icon icon="icon24 icons-ic24px-user"></Icon>
        </div>        
      </ListInput>
      <ListInput
        label="Input icon left"
        type="text"
        placeholder="Input"
        clearButton
        className="icon-left"
      >
        <div className="icons" slot="inner-end">
        <Icon icon="icon24 icons-ic24px-user"></Icon>
        </div>        
      </ListInput>


      <ListItem
        title="Toggle"
      >
        <Toggle slot="after" />
      </ListItem>

      <ListInput
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>
          
          </Col>
          <Col>
          <BlockTitle>Sellect form</BlockTitle>
          <List>
          <ListItem title="Sellect form" smartSelect smartSelectParams={{pageTitle: 'Select Option',closeOnSelect:true, openIn: 'popup',searchbar: true }}>
        <select name="form" placeholder='Chọn'>
        <option value=""></option>
        <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </ListItem>

          </List>          
          
          </Col>
      </Row>   
    

    <BlockTitle>Checkbox group</BlockTitle>
    <List>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></ListItem>
    </List>

    <BlockTitle>Radio buttons group</BlockTitle>
    <List>
      <ListItem
        radio
        name="radio"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Food"
        title="Food"
      ></ListItem>
    </List>
    
    <BlockTitle>With Media Lists</BlockTitle>
      <List mediaList>
        <ListItem
          checkbox
          defaultChecked
          name="demo-media-checkbox"
          title="Title"
          after="17:14"
          subtitle="subtitle"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </List>
  </Page>
);

export default DatKhamDetail;
