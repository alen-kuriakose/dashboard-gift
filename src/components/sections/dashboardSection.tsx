/**
 * The `DashboardSection` function renders a dashboard layout with various charts and widgets for an
 * eCommerce application.
 * @returns The `DashboardSection` component is being returned. It consists of various chart components
 * such as `WidgetChart`, `StackedBarChart`, `AreaChartComponent`, `WorldMap`, `TableChart`, and
 * `PieChartComponent` arranged in a grid layout within a `div` element. The component also includes a
 * `TextSmallSemibold` component for displaying the text "eCommerce".
 */
import { invoiceKeys, invoices, invoicesHeader, stackedBhartDataGiftProjection, WidgetChartData } from "@/utils/helper";
import {
  AreaChartComponent,
  PieChartComponent,
  StackedBarChart,
  TableChart,
  WidgetChart,
  WorldMap,
} from "../charts";
import { TextSmallSemibold } from "../typography";
import { ChartConfig } from "../ui/chart";


const chartConfig = {
  invitations: {
    label: "Invitations",
    color: "rgba(168, 197, 218, 1)",
  },
  guestCount: {
    label: "Guest Count",
    color: "rgba(168, 197, 218, 0.5)",
  },
} satisfies ChartConfig;



export function DashboardSection() {
  return (
    <div className="w-full flex flex-grow p-7 flex-col gap-4 ">
      <div className="px-2 py-1 ">
        <TextSmallSemibold className="text-dark dark:text-white">
          eCommerce
        </TextSmallSemibold>
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-6 grid md:grid-cols-2 gap-7 ">
          {WidgetChartData.map((item, index) => {
            return (
              <WidgetChart
                widgetName={item.widgetName}
                mainValue={item.mainValue}
                growth={item.growth}
                isRevRelated={item.isRevRelated}
                className={item.className}
                key={index}
                fontClass={item.fontClass}
                iconClr={item.icnClr}
              />
            );
          })}
        </div>
        <div className="col-span-12 lg:col-span-6">
          <StackedBarChart chartData={stackedBhartDataGiftProjection} chartConfig={chartConfig} chartHeader={"Guests Summary"} />
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-7 h-full">
          <div className=" col-span-12 lg:col-span-9 h-full">
            <AreaChartComponent />
          </div>
          <div className=" col-span-12 lg:col-span-3">
            <WorldMap />
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-7 h-full">
          <div className=" col-span-12 lg:col-span-9 h-full">
            <TableChart headerNames={invoicesHeader} datas={invoices} keys={invoiceKeys} />
          </div>
          <div className=" col-span-12 lg:col-span-3">
            <PieChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
