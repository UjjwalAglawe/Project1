import {
  LayoutDashboard,
  Package,
  TrendingUp,
  Wrench,
  FileCheck,
  BarChart3
} from 'lucide-react';

export default function Layout({ children }) {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', id: 'dashboard' },
    { icon: <Package size={20} />, label: 'Assets', id: 'assets' },
    { icon: <TrendingUp size={20} />, label: 'Production', id: 'production' },
    { icon: <Wrench size={20} />, label: 'Maintenance', id: 'maintenance' },
    { icon: <FileCheck size={20} />, label: 'Compliance', id: 'compliance' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', id: 'analytics' }
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                PetroManage
              </h1>
              <p className="text-xs text-gray-500">
                Operations Management
              </p>
            </div>

            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-slate-800 font-medium text-sm"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                Operations Manager
              </p>
              <p className="text-xs text-gray-500">
                operator@petromanage.com
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium">
              OM
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {children}
        </div>
      </main>
    </div>
  );
}
