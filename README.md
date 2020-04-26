# dz-daterangepicker-material

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/test-rearct-lib-4.svg)](https://www.npmjs.com/package/dz-daterangepicker-material) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Dz Daterangepicker [Material](https://material.io/design/introduction/).

This [React](https://reactjs.org/) date range picker component creates a dropdown menu from which a user can select a range of dates.It leverages moment.js to handle date manipulation and parsing. I created it while building my personal projects where i used [Material UI](https://material-ui.com) and  needed a way to select date ranges.

## Install

```bash
npm install --save dz-daterangepicker-material
```
## Day, Year, Month view selection
![](./img/screen.png)

## Usage

```jsx
import React, { Component } from 'react'

import DateRangePicker from "dz-daterangepicker-material";
import "test-rearct-lib-4/src/style/main.scss";

function Example(){
    const [date, setDate] = React.useState({
      startDate: new Date(2020, 4, 1),
      endDate: new Date(2020, 4, 10)
    })

    const onChange = (start, end) => {
        setDate({
          startDate: start,
          endDate: end,
        })
    }

    return (
     <DateRangePicker
       startDate={date.startDate}
       endDate={date.endDate}
       onChange={onChange}
       startWeek={'monday'}
     />
    )
}


```

## Donation
:beer: :beer: :beer:

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4H8MQCF7T74P8&source=url)

:beer: :beer: :beer:

## License

MIT © [Dzheyhan Ahmedov](https://github.com/dzheyhan)
