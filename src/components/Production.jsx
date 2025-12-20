import { useState } from 'react';
import { Plus, Calendar, TrendingUp, BarChart } from 'lucide-react';
import PlanForm from './PlanForm';
import RecordForm from './RecordForm';

export default function Production() {
  const [activeTab, setActiveTab] = useState('plans');
  const [showAddForm, setShowAddForm] = useState(false);

  const productionPlans = [
    { id: 'PLAN-001', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', plannedVolume: 5000, unit: 'barrels/day', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Active' },
    { id: 'PLAN-002', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', plannedVolume: 4200, unit: 'barrels/day', startDate: '2024-01-01', endDate: '2024-03-31', status: 'Active' },
    { id: 'PLAN-003', assetId: 'RIG-008', assetName: 'Gulf Platform Echo', plannedVolume: 6500, unit: 'barrels/day', startDate: '2024-01-15', endDate: '2024-04-15', status: 'Active' },
    { id: 'PLAN-004', assetId: 'STG-012', assetName: 'Storage Facility B', plannedVolume: 150000, unit: 'barrels', startDate: '2024-01-01', endDate: '2024-06-30', status: 'Planned' }
  ];

  const productionRecords = [
    { id: 'REC-1245', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', actualVolume: 5150, plannedVolume: 5000, unit: 'barrels', date: '2024-01-14', variance: '+3%' },
    { id: 'REC-1246', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', actualVolume: 4050, plannedVolume: 4200, unit: 'barrels', date: '2024-01-14', variance: '-3.6%' },
    { id: 'REC-1247', assetId: 'RIG-008', assetName: 'Gulf Platform Echo', actualVolume: 6420, plannedVolume: 6500, unit: 'barrels', date: '2024-01-14', variance: '-1.2%' },
    { id: 'REC-1248', assetId: 'RIG-001', assetName: 'North Sea Rig Alpha', actualVolume: 4980, plannedVolume: 5000, unit: 'barrels', date: '2024-01-13', variance: '-0.4%' },
    { id: 'REC-1249', assetId: 'RIG-002', assetName: 'West Texas Rig Beta', actualVolume: 4300, plannedVolume: 4200, unit: 'barrels', date: '2024-01-13', variance: '+2.4%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-white flex-1">
          <h2 className="text-3xl font-bold">Production Management</h2>
          <p className="text-emerald-100 mt-1">Plan and track production operations</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors ml-6"
        >
          <Plus size={20} />
          {activeTab === 'plans' ? 'New Plan' : 'Add Record'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <BarChart className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">15,650</p>
              <p className="text-sm text-gray-600">Daily Production (barrels)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">98.2%</p>
              <p className="text-sm text-gray-600">Plan Achievement</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-50 rounded-lg">
              <Calendar className="text-amber-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-sm text-gray-600">Active Production Plans</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Actual vs Planned Production Comparison</h3>
          <div className="space-y-6">
            {[
              { asset: 'RIG-001', planned: 5000, actual: 5150, date: '2024-01-14' },
              { asset: 'RIG-002', planned: 4200, actual: 4050, date: '2024-01-14' },
              { asset: 'RIG-008', planned: 6500, actual: 6420, date: '2024-01-14' }
            ].map((data) => {
              const maxValue = Math.max(data.planned, data.actual);
              const plannedPercent = (data.planned / maxValue) * 100;
              const actualPercent = (data.actual / maxValue) * 100;

              return (
                <div key={data.asset}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900">{data.asset}</p>
                      <p className="text-xs text-gray-500">{data.date}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Planned</p>
                        <p className="font-bold text-gray-900">{data.planned.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Actual</p>
                        <p className="font-bold text-gray-900">{data.actual.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Variance</p>
                        <p className={`font-bold ${data.actual >= data.planned ? 'text-green-600' : 'text-red-600'}`}>
                          {((data.actual / data.planned - 1) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 h-8">
                    <div className="flex-1 flex items-center">
                      <div className="w-full bg-blue-500 rounded-l-lg h-full" style={{ width: `${plannedPercent}%` }}>
                        <span className="text-xs text-white font-medium px-2 py-1 inline-block">Planned</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-full rounded-r-lg ${data.actual >= data.planned ? 'bg-green-500' : 'bg-amber-500'}`} style={{ width: `${actualPercent}%` }}>
                        <span className="text-xs text-white font-medium px-2 py-1 inline-block">Actual</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {showAddForm && (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    {activeTab === 'plans' ? (
      <PlanForm onCancel={() => setShowAddForm(false)} />
    ) : (
      <RecordForm onCancel={() => setShowAddForm(false)} />
    )}
  </div>
)}


      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('plans')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'plans'
                  ? 'border-b-2 border-slate-800 text-slate-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Production Plans
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'records'
                  ? 'border-b-2 border-slate-800 text-slate-800'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Production Records
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          {activeTab === 'plans' ? (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planned Volume</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productionPlans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{plan.assetName}</p>
                        <p className="text-xs text-gray-500">{plan.assetId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {plan.plannedVolume.toLocaleString()} {plan.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {plan.startDate} to {plan.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        plan.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {plan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Record ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planned</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {productionRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{record.assetName}</p>
                        <p className="text-xs text-gray-500">{record.assetId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.actualVolume.toLocaleString()} {record.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {record.plannedVolume.toLocaleString()} {record.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        record.variance.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {record.variance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
