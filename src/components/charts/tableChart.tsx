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



export function TableChart() {
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
          {invoices.map((invoice) => (  
            <TableRow key={invoice.name} className="border-0">
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.totalGifts}</TableCell>
              <TableCell>{invoice.giftValue}</TableCell>
              <TableCell className="">{invoice.mode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
