import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { invoices } from "@/utils/helper";
import { CardHeader, CardTitle } from "../ui/card";

type TableChartProps={
  headerNames:Array<string>,
  datas:Array<any>,
  keys:Array<string>
}


export function TableChart({datas,headerNames,keys}:TableChartProps) {
  return (
    <div className="bg-primary-light p-6 rounded-2xl dark:bg-white/15 shadow-none h-full">
      <CardHeader className=" px-0 pt-1 font-inter font-semibold text-sm">
        <CardTitle className="text-dark dark:text-white">Gift Summary</CardTitle>
      </CardHeader>
      <Table className="">
        <TableHeader className="">
          <TableRow className="text-dark dark:text-white/40 text-xs dark:border-white/20 border-b-[1px]">
            <TableHead className="">Name</TableHead>
            <TableHead>Total Gifts</TableHead>
            <TableHead>Value</TableHead>
            <TableHead className="">Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-dark dark:text-white text-xs">
          {datas.map((data,index) => (  
            <TableRow key={index} className="border-0">
              {keys.map((dataKey)=>{
                console.log(data[dataKey])
                return(
                <TableCell>{data[dataKey]}</TableCell>
                )
              })}             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
