import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/src/app/components/ui/table"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    
  ]
  
  export function TableData({data}  : any) {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] font-bold">Close</TableHead>
            <TableHead className = "font-bold">Open</TableHead>
            <TableHead className="text-center font-bold" >High</TableHead>
            <TableHead className="text-center font-bold">Low</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i:any) => (
            <TableRow key={i.Close}>
              <TableCell className="">{parseFloat(i.Close).toFixed(2)}</TableCell>
              <TableCell>{parseFloat(i.Open).toFixed(2)}</TableCell>
              <TableCell className="text-center">{parseFloat(i.High).toFixed(2)}</TableCell>
              <TableCell className="text-center">{parseFloat(i.Low).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    )
  }
  