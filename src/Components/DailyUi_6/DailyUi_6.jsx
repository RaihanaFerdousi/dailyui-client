import React from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Users, 
  MessageSquare, 
  FileText, 
  Award,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const DailyUi_6 = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div 
            className="h-48 w-full bg-gradient-to-r from-blue-500 to-indigo-600"
            aria-label="Profile cover image"
          />
          
          <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
            <div className="absolute -mt-36 flex justify-center">
              <img 
                className="h-32 w-32 rounded-full ring-4 ring-white object-cover" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Profile picture"
              />
            </div>
            
            <div className="mt-20 sm:mt-16 sm:flex sm:items-end sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Briefcase className="h-4 w-4 mr-1" />
                  Product Manager at TechCorp
                </p>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  San Francisco, CA
                </p>
                <div className="mt-3 flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-2">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Connect
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Message
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">About</h2>
                  <p className="text-sm text-gray-600">
                    Product manager with 8+ years of experience in SaaS and fintech. 
                    Passionate about creating user-centered products that solve real problems.
                    Expertise in agile methodologies, user research, and cross-functional team leadership.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h2>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      sarah.johnson@example.com
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      Joined January 2020
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-medium text-gray-900 mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Product Management', 'User Research', 'Agile', 'Data Analysis', 'UX/UI', 'Team Leadership', 'Strategic Planning'].map((skill) => (
                      <span key={skill} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden">
                  <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <div className="p-4 text-center">
                      <span className="block text-2xl font-bold text-gray-900">1,248</span>
                      <span className="block text-sm font-medium text-gray-500">Connections</span>
                    </div>
                    <div className="p-4 text-center">
                      <span className="block text-2xl font-bold text-gray-900">43</span>
                      <span className="block text-sm font-medium text-gray-500">Projects</span>
                    </div>
                    <div className="p-4 text-center">
                      <span className="block text-2xl font-bold text-gray-900">92%</span>
                      <span className="block text-sm font-medium text-gray-500">Completion</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg mb-6 p-5">
                  <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-gray-500" />
                    Experience
                  </h2>
                  <div className="space-y-5">
                    {[
                      {
                        role: 'Senior Product Manager',
                        company: 'TechCorp',
                        period: '2020 - Present',
                        description: 'Leading product strategy and development for the company\'s flagship SaaS platform.'
                      },
                      {
                        role: 'Product Manager',
                        company: 'InnovateCo',
                        period: '2017 - 2020',
                        description: 'Managed the product lifecycle for mobile applications with over 2M users.'
                      },
                      {
                        role: 'Associate Product Manager',
                        company: 'StartupXYZ',
                        period: '2015 - 2017',
                        description: 'Collaborated with engineering and design teams to launch new product features.'
                      }
                    ].map((job, index) => (
                      <div key={index} className="relative pl-8 pb-4">
                        <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200"></div>
                        <div className="absolute top-1 left-0 -ml-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white"></div>
                        <h3 className="text-base font-medium text-gray-900">{job.role}</h3>
                        <p className="text-sm text-gray-600">{job.company} • {job.period}</p>
                        <p className="mt-1 text-sm text-gray-500">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Award className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-full" />,
                        title: 'Earned a new certification',
                        description: 'Completed Advanced Product Management certification',
                        time: '2 days ago'
                      },
                      {
                        icon: <FileText className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-full" />,
                        title: 'Published an article',
                        description: 'How We Improved User Retention by 43%',
                        time: '1 week ago'
                      },
                      {
                        icon: <Users className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-full" />,
                        title: 'Joined a new group',
                        description: 'Product Managers in Tech',
                        time: '2 weeks ago'
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex-shrink-0">{activity.icon}</div>
                        <div>
                          <h4 className="text-base font-medium text-gray-900">{activity.title}</h4>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyUi_6;