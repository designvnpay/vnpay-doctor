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
  Accordion,
  Button,
  Range,
  Chip,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name="FormPage">
    <Navbar title="Form" backLink="Back" className='formpage'>

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
          <ListItem title="Chọn" smartSelect smartSelectParams={{
            pageTitle: 'Chọn', openIn: 'popup',searchbar: true, searchbarPlaceholder: 'Chọn',
            
             }}>
        <select name="form" placeholder='Chọn'>
        <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </ListItem>
          </List>          
          
          </Col>
      </Row>  
      <BlockTitle>Alert</BlockTitle>
      <Block>
      <div className="toast toast-success modal-in">
  <div className="toast-content align-items-start">
    <div className="toast-text toast-custom"><Icon icon="icon24 icons-ic24px-status-success"></Icon>
    <BlockTitle className='font-size-14 no-margin'>Success</BlockTitle>
    <p className='mt5'>Detailed description and advice about successful copywriting.</p>
    </div>    
    <Button className='toast-button toast-close'><Icon icon="icon24 icons-ic24px-add"></Icon></Button>
  </div>
</div>
      </Block>

      <Block>
      <div className="toast toast-warning modal-in">
  <div className="toast-content align-items-start">
    <div className="toast-text toast-custom"><Icon icon="icon24 icons-ic24px-status-warning"></Icon>
    <BlockTitle className='font-size-14 no-margin'>Warning</BlockTitle>
    <p className='mt5'>Detailed description and advice about successful copywriting.</p>
    </div>    
    <Button className='toast-button toast-close'><Icon icon="icon24 icons-ic24px-add"></Icon></Button>
  </div>
</div>
      </Block>

      <Block>
      <div className="toast toast-error modal-in">
  <div className="toast-content align-items-start">
    <div className="toast-text toast-custom"><Icon icon="icon24 icons-ic24px-status-error"></Icon>
    <BlockTitle className='font-size-14 no-margin'>Error</BlockTitle>
    <p className='mt5'>Detailed description and advice about successful copywriting.</p>
    </div>    
    <Button className='toast-button toast-close'><Icon icon="icon24 icons-ic24px-add"></Icon></Button>
  </div>
</div>
      </Block>
      <BlockTitle>Float message</BlockTitle>
      <Block>
      <div className="toast toast-default modal-in">
  <div className="toast-content">
    <div className="toast-text"><Icon icon="icon24 icons-ic24px-status-success"></Icon> Creat item success</div>
  </div>
</div>
      </Block>
      <Block>
      <div className="toast toast-default modal-in">
  <div className="toast-content">
    <div className="toast-text"><Icon icon="icon24 icons-ic24px-status-info"></Icon> This is normal message</div>
  </div>
</div>
      </Block>

      
      <BlockTitle>Accordion jquery</BlockTitle> 
      <Accordion>
    <div className="accordion-item">
            <div className="accordion-head">Head 1</div>
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-head">Head 2</div>
            <div className="accordion-body hide">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </Accordion>
    

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
    <BlockTitle>Badge</BlockTitle>
    <List>
      <ListItem title="Title" badge="Default" />
      <ListItem title="Title" badge="Error" badgeColor="danger" />
      <ListItem title="Title" badge="Success" badgeColor="success" />
      <ListItem title="Title" badge="Warning" badgeColor="warning" />
      <ListItem title="Title" badge="Processing" badgeColor="processing" />
    </List>
    <BlockTitle>Badge Filled</BlockTitle>
    <List>
    <ListItem title="Title" badge="Default" badgeColor='bg-default' />
    <ListItem title="Title" badge="Default" badgeColor='bg-black' />
      <ListItem title="Title" badge="Error" badgeColor="bg-danger" />
      <ListItem title="Title" badge="Success" badgeColor="bg-success" />
      <ListItem title="Title" badge="Warning" badgeColor="bg-warning" />
      <ListItem title="Title" badge="Processing" badgeColor="bg-processing" />
    </List>
    <Col>
        <Chip text="Error" color="red" />
        <Chip text="Success" color="green" />
        <Chip text="Processing" color="blue" />
        <Chip text="Warning" color="orange" />
        <Chip text="Default" color="black" />
        <Chip text="Pink" color="pink" />
        <Chip outline text="Error" color="red" />
        <Chip outline text="Success" color="green" />
        <Chip outline text="Processing" color="blue" />
        <Chip outline text="Warning" color="orange" />
        <Chip outline text="Default" color="black" />
        <Chip outline text="Pink" color="pink" />
        </Col>
    
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

export default FormPage;
