"use client"

import { useState } from 'react'
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'
import { startOfWeek } from 'date-fns/startOfWeek'
import { getDay } from 'date-fns/getDay'
import { enUS } from 'date-fns/locale/en-US'
import { addHours } from 'date-fns/addHours'
import { startOfHour } from 'date-fns/startOfHour'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'


export default function ScheduleViewPage() {
    const [events, setEvents] = useState<Event[]>([
        {
            title: 'Learn cool stuff',
            start,
            end,
        },
    ])

    const onEventResize: withDragAndDropProps['onEventResize'] = (data: any) => {
        const { start, end } = data

        setEvents(currentEvents => {
            const firstEvent = {
                start: new Date(start),
                end: new Date(end),
            }
            return [...currentEvents, firstEvent]
        })
    }

    const onEventDrop: withDragAndDropProps['onEventDrop'] = (data: any) => {
        console.log(data)
    }

    return (
        <div className='px-4'>
            <DnDCalendar
                className='text-sm'
                defaultView='week'
                events={events}
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                resizable
                style={{ height: '100vh' }}
            />
        </div>
    )
}

const locales = {
    'en-US': enUS,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})
//@ts-ignore
const DnDCalendar = withDragAndDrop(Calendar)
