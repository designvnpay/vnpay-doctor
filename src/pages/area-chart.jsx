import React from 'react';
import { Page, Navbar, BlockTitle, Block, AreaChart,
  List,
  ListInput,
  ListItem,
  Toggle,
  Row,
  Button,
  Range,

} from 'framework7-react';

export default () => {
  // helpers data for axis
  const dates = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  for (let i = 0; i < 4; i += 1) {
    dates.push(new Date(year, month - (3 - i)));
  }
  const axisDateFormat = Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' });
  const tooltipDateFormat = Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' });

  return (
    
      
    <Page>
      <Navbar title="Area Chart" backLink="Back" />
      <BlockTitle>Form</BlockTitle>
    <List noHairlinesMd>
      <ListInput
        label="Họ tên"
        type="text"
        placeholder="Nhập họ tên"
      ></ListInput>

      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>

      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></ListInput>

      <ListInput
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </ListInput>

      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></ListInput>

      <ListItem
        title="Toggle"
      >
        <Toggle slot="after" />
      </ListItem>

      <ListInput
        label="Range"
        input={false}
      >
        <Range slot="input" value={50} min={0} max={100} step={1} />
      </ListInput>

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
      <BlockTitle>Simple Area Chart</BlockTitle>
      <Block strong>
        <AreaChart
          datasets={[
            {
              color: '#f00',
              values: [0, 100, 250, 300, 175, 400],
            },
            {
              color: '#00f',
              values: [100, 75, 133, 237, 40, 200],
            },
            {
              color: '#ff0',
              values: [100, 300, 127, 40, 250, 80],
            },
          ]}
        />
      </Block>
      <BlockTitle>Area Chart With Tooltip</BlockTitle>
      <Block strong>
        <AreaChart
          tooltip
          datasets={[
            {
              label: 'Red data',
              color: '#f00',
              values: [100, 75, 133, 237, 40, 200],
            },
            {
              label: 'Blue data',
              color: '#00f',
              values: [100, 300, 127, 40, 250, 80],
            },
            {
              label: 'Yellow data',
              color: '#ff0',
              values: [0, 100, 250, 300, 175, 400],
            },
          ]}
        />
      </Block>
      <BlockTitle>Area Chart With Axis</BlockTitle>
      <Block strong>
        <AreaChart
          tooltip
          axis
          axisLabels={dates}
          formatAxisLabel={(date) => axisDateFormat.format(date)}
          formatTooltipAxisLabel={(date) => tooltipDateFormat.format(date)}
          datasets={[
            {
              label: 'Green data',
              color: '#0f0',
              values: [100, 75, 133, 237],
            },
            {
              label: 'Red data',
              color: '#f00',
              values: [100, 300, 127, 47],
            },
            {
              label: 'Yellow data',
              color: '#ff0',
              values: [0, 100, 250, 307],
            },
          ]}
        />
      </Block>
      <BlockTitle>Area Chart With Legend</BlockTitle>
      <Block strong>
        <AreaChart
          tooltip
          axis
          axisLabels={dates}
          legend
          toggleDatasets
          formatAxisLabel={(date) => axisDateFormat.format(date)}
          formatTooltipAxisLabel={(date) => tooltipDateFormat.format(date)}
          datasets={[
            {
              label: 'Red data',
              color: '#f00',
              values: [100, 300, 127, 47],
            },
            {
              label: 'Blue data',
              color: '#00f',
              values: [100, 75, 133, 237],
            },
            {
              label: 'Yellow data',
              color: '#ff0',
              values: [0, 100, 250, 307],
            },
          ]}
        />
      </Block>
      <BlockTitle>Lines Chart</BlockTitle>
      <Block strong>
        <AreaChart
          tooltip
          axis
          axisLabels={dates}
          legend
          toggleDatasets
          lineChart
          formatAxisLabel={(date) => axisDateFormat.format(date)}
          formatTooltipAxisLabel={(date) => tooltipDateFormat.format(date)}
          datasets={[
            {
              label: 'Red data',
              color: '#f00',
              values: [0, 300, 127, 47],
            },
            {
              label: 'Blue data',
              color: '#00f',
              values: [0, 75, 133, 237],
            },
            {
              label: 'Green data',
              color: '#0f0',
              values: [0, 100, 250, 307],
            },
          ]}
        />
      </Block>
    </Page>
      
    
  );
};