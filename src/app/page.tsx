import client from '../graphql/graphql-client';
import { GET_CUSTOMER } from '@/graphql/customer';
import Dashboard from "@/components/dashboard";
import Navigation from "@/components/navigation";
import Welcome from "@/components/welcome";
import { CustomersResponse } from "@/types/types";
import './../components/global.scss';

async function fetchCustomer() {
    const data = await client.request<CustomersResponse>(GET_CUSTOMER);
    return data.customers;
}

export default async function Home() {
    const customers = await fetchCustomer();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <Welcome name={customers[0]?.name} />
            <div className="w-full bg-white rounded-md shadow p-2" style={{ maxHeight: '68dvh', minHeight: '68dvh', overflowX: 'scroll' }}>
                <Dashboard />
            </div>
            <Navigation currentRoute="/" />
        </main>
    );
}
