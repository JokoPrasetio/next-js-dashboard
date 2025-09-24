import { lusitana } from "@/app/ui/font";
import Search from "@/app/ui/search";
import { Suspense } from "react";
import Table from "@/app/ui/customers/table";
import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";

export default async function Page(props: {
  searchParams?:Promise<{
    query?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const data  = await fetchFilteredCustomers(searchParams?.query || '');
  return (
    <div className="w-full">
        <Table customers={data} />
    </div>
  );
}