import React, { useState, useRef } from 'react';
import {
  Page,
  Navbar,
  Block,
  Button,
  BlockTitle,
  Actions,
  ActionsGroup,
  ActionsLabel,
  ActionsButton,
  List,
  ListItem,
  AccordionContent,
  AccordionItem,
  AccordionToggle,
  Badge,
  f7,
} from 'framework7-react';

export default () => {
  const [actionGridOpened, setActionGridOpened] = useState(false);
  const actionsToPopover = useRef(null);

  const openActionsPopover = () => {
    if (!actionsToPopover.current) {
      actionsToPopover.current = f7.actions.create({
        buttons: [
          {
            text: 'Tiêu đề',
            label: true,
          },
          {
            text: 'Button 1',
            bold: true,
          },
          {
            text: 'Button 2',
          },
          {
            text: 'Hủy',
            color: 'red',
          },
        ],
        // Need to specify popover target
        targetEl: '.button-to-popover',
      });
    }

    // Open
    actionsToPopover.current.open();
  };

  return (
    
      
    <Page>
      <Navbar title="Action Sheet" backLink="Back" />
      <Block strong>
        <p className="row">
          {/* One group, open by "actionsOpen" attribute */}
          <Button className="col" raised actionsOpen="#actions-one-group">
            One group
          </Button>
          {/*  Two groups, open by "actionsOpen" attribute */}
          <Button className="col" raised actionsOpen="#actions-two-groups">
            Two groups
          </Button>
        </p>
        <p>
          {/* Actions Grid, open by changing actionGridOpened state property */}
          <Button raised onClick={() => setActionGridOpened(true)}>
            Action Grid
          </Button>
        </p>
      </Block>

      <BlockTitle>Action Sheet To Popover</BlockTitle>
      <Block strong>
        <p>
          Tiêu đề Focus:
          <Button
            style={{ display: 'inline-block' }}
            className="button-to-popover"
            onClick={openActionsPopover}
          >
            Actions
          </Button>
        </p>
      </Block>

      {/* One Group */}
      <Actions id="actions-one-group">
        <ActionsGroup>
          <ActionsLabel>Tiêu đề</ActionsLabel>
          <ActionsButton bold>Button 1</ActionsButton>
          <ActionsButton>Button 2</ActionsButton>
          <ActionsButton color="red">Hủy</ActionsButton>
        </ActionsGroup>
      </Actions>

      {/* Two Groups */}
      <Actions id="actions-two-groups">
        <ActionsGroup>
          <ActionsLabel>Tiêu đề</ActionsLabel>
          <ActionsButton bold>Button 1</ActionsButton>
          <ActionsButton>Button 2</ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton color="red">Hủy</ActionsButton>
        </ActionsGroup>
      </Actions>

      {/* Grid */}
      <Actions
        grid={true}
        opened={actionGridOpened}
        onActionsClosed={() => setActionGridOpened(false)}
      >
        <ActionsGroup>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 1</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 2</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 3</span>
          </ActionsButton>
        </ActionsGroup>
        <ActionsGroup>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 4</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 5</span>
          </ActionsButton>
          <ActionsButton>
            <img
              slot="media"
              src="svg/ava-default.svg"
              width="48"
            />
            <span>Button 6</span>
          </ActionsButton>
        </ActionsGroup>
      </Actions>

    </Page>
      
    
  );
};