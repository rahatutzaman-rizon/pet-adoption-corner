import React from 'react';
import { useState, useEffect } from 'react';
import {
  Store,

  UserCheck,
  Heart,
  ClipboardList,
  PiggyBank,
  TrendingUp,
  Loader2,
  AlertTriangle,
  PawPrint
} from 'lucide-react';

const DashboardCard = ({ icon: Icon, title, value, description, loading, trend, error }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="h-5 w-5 text-gray-500" />
      </div>
      
      {loading ? (
        <div className="flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      ) : error ? (
        <div className="flex items-center space-x-2 text-red-500">
          <AlertTriangle className="h-4 w-4" />
          <p className="text-sm">Failed to load data</p>
        </div>
      ) : (
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2 space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-xs text-green-500">{trend}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MyDonation = () => {
  const [data, setData] = useState({
    products: { count: 0, loading: true, error: false },
    pets: { count: 0, loading: true, error: false },
    adoptions: { count: 0, loading: true, error: false },
    payments: { count: 0, amount: 0, loading: true, error: false },
    orders: { count: 0, loading: true, error: false },
    donations: { count: 0, loading: true, error: false }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://pet-adoption-corner-server.vercel.app/shop'),
          fetch('https://pet-adoption-corner-server.vercel.app/pet-listing'),
          fetch('https://pet-adoption-corner-server.vercel.app/adopt'),
          fetch('https://pet-adoption-corner-server.vercel.app/paymentlist'),
          fetch('https://pet-adoption-corner-server.vercel.app/order'),
          fetch('https://pet-adoption-corner-server.vercel.app/donation')
        ]);

        const [shop, petListing, adopt, paymentList, order, donation] = await Promise.all(
          responses.map(async (res) => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
          })
        );

        const totalAmount = paymentList.reduce((sum, payment) => sum + payment.amount, 0);
        const avgDonation = totalAmount / paymentList.length;

        setData({
          products: { count: shop.length, loading: false, error: false },
          pets: { count: petListing.length, loading: false, error: false },
          adoptions: { count: adopt.length, loading: false, error: false },
          payments: { 
            count: paymentList.length, 
            amount: totalAmount,
            avgDonation: avgDonation,
            loading: false,
            error: false 
          },
          orders: { count: order.length, loading: false, error: false },
          donations: { count: donation.length, loading: false, error: false }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(prev => ({
          ...prev,
          products: { ...prev.products, loading: false, error: true },
          pets: { ...prev.pets, loading: false, error: true },
          adoptions: { ...prev.adoptions, loading: false, error: true },
          payments: { ...prev.payments, loading: false, error: true },
          orders: { ...prev.orders, loading: false, error: true },
          donations: { ...prev.donations, loading: false, error: true }
        }));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">Donation History</h1>
            <p className="mt-2 text-gray-600">
              Monitor your organizations key metrics and performance indicators
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-md p-3">
                <p className="text-sm font-medium text-blue-600">Total Revenue</p>
                <p className="text-2xl font-bold text-blue-700">
                  ${data.payments.amount?.toLocaleString() || 0}
                </p>
              </div>
              <div className="bg-green-50 rounded-md p-3">
                <p className="text-sm font-medium text-green-600">Success Rate</p>
                <p className="text-2xl font-bold text-green-700">98.5%</p>
              </div>
              <div className="bg-purple-50 rounded-md p-3">
                <p className="text-sm font-medium text-purple-600">Active Users</p>
                <p className="text-2xl font-bold text-purple-700">1,234</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            icon={Store}
            title="Total Products"
            value={data.products.count}
            description="Available items in store"
            loading={data.products.loading}
            error={data.products.error}
          />

          <DashboardCard
            icon={PawPrint}
            title="Available Pets"
            value={data.pets.count}
            description="Pets waiting for adoption"
            loading={data.pets.loading}
            error={data.pets.error}
          />

          <DashboardCard
            icon={UserCheck}
            title="Successful Adoptions"
            value={data.adoptions.count}
            description="Happy pets with new homes"
            loading={data.adoptions.loading}
            error={data.adoptions.error}
            trend="+12% this month"
          />

          <DashboardCard
            icon={Heart}
            title="Total Donations"
            value={`$${data.payments.amount?.toLocaleString() || 0}`}
            description={`Average donation: $${data.payments.avgDonation?.toFixed(2) || 0}`}
            loading={data.payments.loading}
            error={data.payments.error}
          />

          <DashboardCard
            icon={ClipboardList}
            title="Active Orders"
            value={data.orders.count}
            description="Orders in processing"
            loading={data.orders.loading}
            error={data.orders.error}
          />

          <DashboardCard
            icon={PiggyBank}
            title="Donation Categories"
            value={data.donations.count}
            description="Active fundraising campaigns"
            loading={data.donations.loading}
            error={data.donations.error}
          />
        </div>
      </div>
    </div>
  );
};

export default MyDonation;