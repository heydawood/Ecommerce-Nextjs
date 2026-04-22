'use client';

import Table from '@/components/ui/table/Table';
import { Product } from '@/app/Types/product';
import Image from 'next/image';


export default function AllProductsTable({
    data,
    loading,
}: {
    data: Product[];
    loading: boolean;
}) {


    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a: Product, b: Product) => (a.id || '').localeCompare(b.id || ''),

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{record.id}</span>
                </div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: Product, b: Product) => { // these(sorter & render) are built in sorters for the table columns, they sort the data based on the column values
                const nameA = a?.name?.toLowerCase() || '';
                const nameB = b?.name?.toLowerCase() || '';
                return nameA.localeCompare(nameB);
            },

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{record.name}</span>
                </div>
            ),
        },

        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a: Product, b: Product) => a.price - b.price,

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">${record.price}</span>
                </div>
            ),
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            sorter: (a: Product, b: Product) => { // these(sorter & render) are built in sorters for the table columns, they sort the data based on the column values
                const nameA = a?.image?.toLowerCase() || '';
                const nameB = b?.image?.toLowerCase() || '';
                return nameA.localeCompare(nameB);
            },

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <Image src={record.image} alt={record.name} width={100} height={100} className="text-paragraph overflow-hidden"/>
                </div>
            ),
        },

        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            sorter: (a: Product, b: Product) => { // these(sorter & render) are built in sorters for the table columns, they sort the data based on the column values
                const nameA = a?.image?.toLowerCase() || '';
                const nameB = b?.image?.toLowerCase() || '';
                return nameA.localeCompare(nameB);
            },

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{record.description}</span>
                </div>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            sorter: (a: Product, b: Product) =>
                new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime(),

            render: (_: any, record: Product) => (
                <div className="flex items-center">
                    <span className="text-paragraph overflow-hidden">{new Date(record.createdAt!).toLocaleDateString()}</span>
                </div>
            ),
        },


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