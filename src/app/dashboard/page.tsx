import StatusDropdown from '@/components/StatusDropdown'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formateprice } from '@/lib/utils'
import { notFound } from 'next/navigation'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  //   <div className='flex min-h-screen w-full bg-muted/40'>
  //   <div className='max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4'>
  //     <div className='flex flex-col gap-16'>
  //       <div className='grid gap-4 sm:grid-cols-2'>
  //         <Card>
  //           <CardHeader className='pb-2'>
  //             <CardDescription>Last Week</CardDescription>
  //             <CardTitle className='text-4xl'>
  //               {formateprice(lastWeekSum._sum.amount ?? 0)}
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent>
  //             <div className='text-sm text-muted-foreground'>
  //               of {formateprice(WEEKLY_GOAL)} goal
  //             </div>
  //           </CardContent>
  //           <CardFooter>
  //             <Progress
  //               value={((lastWeekSum._sum.amount ?? 0) * 100) / WEEKLY_GOAL}
  //             />
  //           </CardFooter>
  //         </Card>
  //         <Card>
  //           <CardHeader className='pb-2'>
  //             <CardDescription>Last Month</CardDescription>
  //             <CardTitle className='text-4xl'>
  //               {formateprice(lastMonthSum._sum.amount ?? 0)}
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent>
  //             <div className='text-sm text-muted-foreground'>
  //               of {formateprice(MONTHLY_GOAL)} goal
  //             </div>
  //           </CardContent>
  //           <CardFooter>
  //             <Progress
  //               value={((lastMonthSum._sum.amount ?? 0) * 100) / MONTHLY_GOAL}
  //             />
  //           </CardFooter>
  //         </Card>
  //       </div>

  //       <h1 className='text-4xl font-bold tracking-tight'>Incoming orders</h1>

  //       <Table>
  //         <TableHeader>
  //           <TableRow>
  //             <TableHead>Customer</TableHead>
  //             <TableHead className='hidden sm:table-cell'>Status</TableHead>
  //             <TableHead className='hidden sm:table-cell'>
  //               Purchase date
  //             </TableHead>
  //             <TableHead className='text-right'>Amount</TableHead>
  //           </TableRow>
  //         </TableHeader>

  //         <TableBody>
  //           {orders.map((order) => (
  //             <TableRow key={order.id} className='bg-accent'>
  //               <TableCell>
  //                 <div className='font-medium'>
  //                   {order.shippingAddress?.name}
  //                 </div>
  //                 <div className='hidden text-sm text-muted-foreground md:inline'>
  //                   {order.user.email}
  //                 </div>
  //               </TableCell>
  //               <TableCell className='hidden sm:table-cell'>
  //                 {/* <StatusDropdown id={order.id} orderStatus={order.status} /> */}
  //               </TableCell>
  //               <TableCell className='hidden md:table-cell'>
  //                 {order.createdAt.toLocaleDateString()}
  //               </TableCell>
  //               <TableCell className='text-right'>
  //                 {formateprice(order.amount)}
  //               </TableCell>
  //             </TableRow>
  //           ))}
  //         </TableBody>
  //       </Table>
  //     </div>
  //   </div>
  // </div>

  )
}

export default Dashboard