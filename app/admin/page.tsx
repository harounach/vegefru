import {
  BsCurrencyExchange,
  BsBasket2Fill,
  BsCupHotFill,
} from "react-icons/bs";
import DashboardInfoCard from "@/app/ui/section/admin/dashboard/DashboardInfoCard";
import BarChart from "@/app/ui/charts/BarChart";
import DonutChart from "@/app/ui/charts/DonutChart";
import AdminLatestOrdersTable from "@/app/ui/actionables/table/AdminLatestOrdersTable";
import { barChartData, donutChartData } from "@/app/lib/data";

export default async function AdminDashboardPage() {
  return (
    <>
      <section id="content">
        <div className="container mx-auto  px-4 py-6 sm:px-0">
          <h1 className="mb-4 text-center text-3xl font-semibold">Dashboard</h1>
          <p className="mb-6 text-center text-base font-normal text-slate-600">
            View a summary of orders and analytics
          </p>
          <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-10">
            <DashboardInfoCard label="Total Sales" value="$99000" color="blue">
              <BsCurrencyExchange />
            </DashboardInfoCard>

            <DashboardInfoCard label="Total Orders" value="340" color="green">
              <BsBasket2Fill />
            </DashboardInfoCard>

            <DashboardInfoCard label="Total Products" value="42" color="orange">
              <BsCupHotFill />
            </DashboardInfoCard>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto  px-4 py-6">
          <h2 className="mb-4 text-2xl font-semibold">Analytics</h2>
          <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-20">
            <div className="rounded bg-white p-4">
              <BarChart salesData={barChartData} />
            </div>
            <div className="rounded bg-white p-4">
              <DonutChart popularCoffeeData={donutChartData} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-6">
          <h2 className="mb-4 text-2xl font-semibold">Lastet orders</h2>
          <AdminLatestOrdersTable />
        </div>
      </section>
    </>
  );
}
