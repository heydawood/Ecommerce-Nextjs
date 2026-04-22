'use client';

import { Button } from '@/components/ui/button';
import Table from '@/components/ui/table/Table';
import { Order } from '@/app/Types/order';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { updateOrderStatus, deleteOrder } from '@/app/actions/orderActions';
import { useQueryClient } from '@tanstack/react-query';
import { customToast } from '../../common/ShowToast';


export default function OrdersTable({
    data,
    loading,
}: {
    data: Order[];
    loading: boolean;
}) {
   

    //tanstack using for mutating data in UI
    const queryClient = useQueryClient();

    const handleStatusChange = async (id: string, status: string) => {
        await updateOrderStatus(id, status); //server action
        

        customToast.success(`Order marked as ${status}`)
        // refresh orders list
        queryClient.invalidateQueries({ queryKey: ['orders'] });
    };

    const handleDelete = async (id: string) => {
        await deleteOrder(id); //server action
        customToast.error(`Order with id ${id} Deleted `)

        queryClient.invalidateQueries({ queryKey: ['orders'] }); //tanstack
    };

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a: Order, b: Order) => Number(a.id) - Number(b.id),

            render: (_: any, record: Order) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{record.id}</span>
                </div>
            ),
        },
        {
            title: 'Items',
            dataIndex: 'items',
            key: 'items',

            render: (_: any, record: Order) => (
                <div className="flex flex-col gap-1">
                    {record.items?.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between text-sm"
                        >
                            <span>
                                {item.name} (x{item.quantity})
                            </span>
                            <span>
                                ${Number(item.price).toFixed(2)}
                            </span>
                        </div>
                    ))}
                </div>
            ),
        },

        {
            title: 'Total',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            sorter: (a: Order, b: Order) => a.totalAmount - b.totalAmount,

            render: (_: any, record: Order) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">${record.totalAmount.toFixed(2)}</span>
                </div>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: (a: Order, b: Order) => { // these(sorter & render) are built in sorters for the table columns, they sort the data based on the column values
                const nameA = a?.status?.toLowerCase() || '';
                const nameB = b?.status?.toLowerCase() || '';
                return nameA.localeCompare(nameB);
            },

            render: (_: any, record: Order) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{record.status}</span>
                </div>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sorter: (a: Order, b: Order) =>
                new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime(),

            render: (_: any, record: Order) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{new Date(record.createdAt!).toLocaleDateString()}</span>
                </div>
            ),
        },


        {
            title: 'Actions',
            dataIndex: 'id',
            key: 'action',
            render: (_: any, record: Order) => (
                <DropdownMenu >
                    <DropdownMenuTrigger  asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='bg-primary/80' align="end">

                        <DropdownMenuItem
                            onClick={() => handleStatusChange(record.id!, 'pending')}
                        >
                            Pending
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => handleStatusChange(record.id!, 'dispatched')}
                        >
                            Dispatched
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => handleStatusChange(record.id!, 'fulfilled')}
                        >
                            Fulfilled
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            className="text-red-500"
                            onClick={() => handleDelete(record.id!)}
                        >
                            Delete
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }
    ];

    return (
        <>
            <Table
                loading={loading}
                columns={columns}
                dataSource={data}
                rowKey="id"
            />

        </>
    );
}
