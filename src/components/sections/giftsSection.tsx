import React from 'react'
import { Card } from '../ui/card'
import { PieChartComponent, TableChart, WidgetChart } from '../charts'

export function GiftsSection() {
  return (
    <div className='grid md:grid-cols-12 gap-4'>
        <div className="col-span-4">
            <PieChartComponent/>
        </div>
        <div className='col-span-8 gap-4 grid grid-cols-3'>
            <WidgetChart widgetName={'Gifts Recieved'} mainValue={'128'}  isRevRelated={false} className={' bg-primary-blue'} fontClass={'text-dark dark:text-dark'} iconClr={''}/>
            <WidgetChart widgetName={'Gifts Given'} mainValue={'45'}  isRevRelated={false} className={' bg-primary-light'} fontClass={'text-dark dark:text-dark'} iconClr={''}/>
            <WidgetChart widgetName={'Gifts Recieved'} mainValue={'128'}  isRevRelated={false} className={' bg-primary-blue/50'} fontClass={'text-dark dark:text-dark'} iconClr={''}/>
            <WidgetChart widgetName={'Gifts Recieved'} mainValue={'128'}  isRevRelated={false} className={' bg-primary-blue'} fontClass={'text-dark dark:text-dark'} iconClr={''}/>
            <WidgetChart widgetName={'Gifts Recieved'} mainValue={'128'}  isRevRelated={false} className={' bg-primary-light'} fontClass={'text-dark dark:text-dark'} iconClr={''}/>
            
        </div>
        
    </div>
  )
}
