import { ArrowRight, BarChart3, Package, TrendingUp, Wrench, FileCheck, Shield } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Package size={32} />,
      title: 'Asset Management',
      description: 'Register and lifecycle track rigs, pipelines, and storage units',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Production Tracking',
      description: 'Plan and monitor daily production with real-time analytics',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Maintenance Scheduling',
      description: 'Streamline preventive and corrective maintenance operations',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Compliance Reporting',
      description: 'Generate safety and environmental compliance reports',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics Dashboard',
      description: 'Visualize trends and predict maintenance needs',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security & Compliance',
      description: 'Industry-standard security with encrypted data handling',
      color: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ];

  const stats = [
    { value: '248', label: 'Assets Managed', color: 'from-blue-600 to-blue-400' },
    { value: '15.6K', label: 'Daily Production (barrels)', color: 'from-emerald-600 to-emerald-400' },
    { value: '94%', label: 'Compliance Score', color: 'from-purple-600 to-purple-400' },
    { value: '99.8%', label: 'System Uptime', color: 'from-cyan-600 to-cyan-400' }
  ];

  return (
    <div className="space-y-0">
      <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Manage Oil & Gas Operations with Confidence
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              PetroManage is the complete solution for asset management, production tracking, maintenance scheduling, and compliance reporting. Streamline your operations and reduce downtime.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-800 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage oil & gas operations effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.color} rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow`}>
                <div className={`${feature.iconColor} mb-4 p-3 bg-white rounded-lg w-fit`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Real-Time Production Monitoring</h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Track actual vs planned production in real-time with advanced analytics. Compare performance across assets and identify optimization opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Real-time production tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Variance analysis & alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Historical trend analysis</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">RIG-001</span>
                  <span className="text-sm text-green-600 font-bold">+3%</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" style={{ width: '103%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 pt-2">
                  <span>Planned: 5000</span>
                  <span>Actual: 5150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 shadow-xl order-2 md:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <Shield size={20} className="text-purple-600" />
                  <span className="font-medium text-gray-700">Safety Score: 95%</span>
                </div>
                <div className="text-center py-6">
                  <div className="text-4xl font-bold text-purple-600">Compliant</div>
                  <p className="text-gray-600 text-sm mt-2">All regulatory standards met</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-4">Compliance & Safety First</h2>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                Maintain full regulatory compliance with automated reporting and audit trails. Generate environmental and safety reports for authorities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Automated compliance reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Complete audit trails</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Industry standard compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">100K+</div>
              <p className="text-gray-600">Production Records Managed Daily</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Global Assets Under Management</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-gray-600">Oil & Gas Companies Trust PetroManage</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading oil & gas companies using PetroManage to streamline operations, reduce downtime, and ensure compliance.
            </p>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-300">
            Trusted by leading oil & gas operators worldwide | Secure | Compliant | Scalable
          </p>
        </div>
      </div>
    </div>
  );
}
