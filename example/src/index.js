import React from 'react'
import ReactDOM from 'react-dom'
import DateRangePicker from "dz-daterangepicker-material";

import "moment/locale/de";
import "dz-daterangepicker-material/src/style/main.scss";

const myStyle = {
    wrap:{
      "flexDirection": "column",
      "alignItems": "center",
      "display": "flex",
      "justifyContent": "center"
    },
    datePeriod:{
      "display": "inlineBlock"
    },
    date:{
      "color": "red"
    }
};

function DateRangePickerView(){
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
       <div style={myStyle.wrap}>
         <h4>Start date:&nbsp;
           <span style={myStyle.date}>{date.startDate? date.startDate.toString(): null}</span>
         </h4>
         <h4 style={myStyle.datePeriod}>End date:&nbsp;
           <span style={myStyle.date}>{date.endDate? date.endDate.toString() : null}</span>
         </h4>

         <DateRangePicker
           startDate={date.startDate}
           endDate={date.endDate}
           onChange={onChange}
              locale={'de'}
              startWeek={'monday'} //monday|saturday|sunday
         />
       </div>
    )
}


ReactDOM.render(<DateRangePickerView/>, document.getElementById('root'))
