import React from 'react'
import { Calendar } from '@fullcalendar/core'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import multiMonthPlugin from '@fullcalendar/multimonth'

import colombianHolidays from "colombian-holidays";

export default class DemoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        invalidDays: [],
        cutomInvalidDay: [{
            title: 'Semana Santa',
            date: '2023-04-01',
            color: 'gray'
            },
            {
                title: 'Semana Santa',
                date: '2023-04-02',
                color: 'gray'
            },
            {
                title: 'Semana Santa',
                date: '2023-04-03',
                color: 'gray'
            },
            {
                title: 'Semana Santa',
                date: '2023-04-04',
                color: 'gray'
            },
            {
                title: 'Semana Santa',
                date: '2023-04-05',
                color: 'gray'
            },
            {
                title: 'Semana Santa',
                date: '2023-04-08',
                color: 'gray'
            },
        
        ],
        eventHolydayList: [],
      };
    }
    componentWillMount() {
        const { cutomInvalidDay } = this.state

        let eventHolydayList = []
        let invalidDays = []

        const holydayList = this.getHolidaysEvent()
        holydayList.map(item => {
            eventHolydayList.push(
                { 
                    title: item.name.es, 
                    date: item.celebrationDate,
                    color: 'black'
                },
            )
            invalidDays.push(item.celebrationDate)
        })

        this.setState({ eventHolydayList: eventHolydayList });

        cutomInvalidDay.map(item => {
            invalidDays.push(item.date)
        })

        this.setState({ invalidDays: invalidDays });

    }

    getHolidaysEvent = () => {
        const thisYear =  new Date().getFullYear();
        const nextYear =  thisYear + 1
        const colombianHolidaysThisYear = colombianHolidays({ year: thisYear });
        const colombianHolidaysNextYear = colombianHolidays({ year: nextYear });

        return colombianHolidaysThisYear.concat(colombianHolidaysNextYear)
    } 

    render() {
        const { eventHolydayList, cutomInvalidDay, invalidDays } = this.state
        console.log('invalidDays', invalidDays)
        const eventSources = [
            {events: eventHolydayList},
            {events: cutomInvalidDay}
        ]
        return (
        <FullCalendar
            plugins={[ multiMonthPlugin ]}
            initialView = {'multiMonthYear'}
            eventSources={eventSources}
        />
        )
    }
}
