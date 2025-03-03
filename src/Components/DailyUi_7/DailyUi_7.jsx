import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Bell, 
  BellOff, 
  Volume2, 
  VolumeX, 
  Eye, 
  EyeOff, 
  Clock, 
  Save, 
  RotateCcw, 
  Smartphone, 
  Wifi, 
  Languages,
  Lock, 
} from 'lucide-react';

// Default settings
const defaultSettings = {
  appearance: {
    theme: 'light',
    fontSize: 'medium',
    reducedMotion: false,
  },
  notifications: {
    enabled: true,
    sound: true,
    taskReminders: true,
    deadlineAlerts: true,
  },
  privacy: {
    dataCollection: false,
    showOnlineStatus: true,
    twoFactorAuth: false,
  },
  productivity: {
    focusMode: false,
    pomodoroDuration: 25,
    breakDuration: 5,
    autoSave: true,
  },
  system: {
    language: 'English',
    syncAcrossDevices: true,
    offlineMode: false,
  }
};

const DailyUi_7 = () => {
  // State for all settings
  const [settings, setSettings] = useState(defaultSettings);
  const [saveStatus, setSaveStatus] = useState('');

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Failed to parse saved settings:', error);
        // If parsing fails, use default settings
        setSettings(defaultSettings);
      }
    }
  }, []);

  // Apply theme effect
  useEffect(() => {
    // Apply theme to document body
    if (settings.appearance.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply font size to root element
    const fontSize = {
      small: '14px',
      medium: '16px',
      large: '18px'
    }[settings.appearance.fontSize] || '16px';
    
    document.documentElement.style.fontSize = fontSize;
  }, [settings.appearance.theme, settings.appearance.fontSize]);

  // Handler for changing settings
  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
    setSaveStatus('');
  };

  // Toggle handler for boolean settings
  const toggleSetting = (category, setting) => {
    handleSettingChange(category, setting, !settings[category][setting]);
  };

  // Reset settings to default
  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('appSettings');
    setSaveStatus('Settings reset to default');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  // Save settings to localStorage
  const saveSettings = () => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
    setSaveStatus('Settings saved successfully!');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  // Apply font size based on settings
  const getFontSizeClass = () => {
    switch (settings.appearance.fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      default: return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen ${settings.appearance.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} ${getFontSizeClass()}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Application Settings</h1>
          <p className="text-gray-500 dark:text-gray-400">Customize your experience</p>
          {saveStatus && (
            <div className="mt-2 p-2 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-md">
              {saveStatus}
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <nav className="sticky top-8">
              <ul className="space-y-2">
                <li>
                  <a href="#appearance" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    Appearance
                  </a>
                </li>
                <li>
                  <a href="#notifications" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    Privacy & Security
                  </a>
                </li>
                <li>
                  <a href="#productivity" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    Productivity
                  </a>
                </li>
                <li>
                  <a href="#system" className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
                    System
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Appearance Settings */}
            <section id="appearance" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                {settings.appearance.theme === 'dark' ? <Moon className="mr-2" size={20} /> : <Sun className="mr-2" size={20} />}
                Appearance
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Theme</label>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleSettingChange('appearance', 'theme', 'light')}
                      className={`flex items-center px-4 py-2 rounded-md ${settings.appearance.theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                    >
                      <Sun size={16} className="mr-2" /> Light
                    </button>
                    <button 
                      onClick={() => handleSettingChange('appearance', 'theme', 'dark')}
                      className={`flex items-center px-4 py-2 rounded-md ${settings.appearance.theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                    >
                      <Moon size={16} className="mr-2" /> Dark
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Font Size</label>
                  <select 
                    value={settings.appearance.fontSize}
                    onChange={(e) => handleSettingChange('appearance', 'fontSize', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Reduced Motion</label>
                  <div 
                    onClick={() => toggleSetting('appearance', 'reducedMotion')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.appearance.reducedMotion ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.appearance.reducedMotion ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section id="notifications" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                {settings.notifications.enabled ? <Bell className="mr-2" size={20} /> : <BellOff className="mr-2" size={20} />}
                Notifications
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Enable Notifications</label>
                  <div 
                    onClick={() => toggleSetting('notifications', 'enabled')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.notifications.enabled ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications.enabled ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Notification Sounds</label>
                  <div 
                    onClick={() => toggleSetting('notifications', 'sound')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.notifications.sound ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications.sound ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Task Reminders</label>
                  <div 
                    onClick={() => toggleSetting('notifications', 'taskReminders')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.notifications.taskReminders ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications.taskReminders ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Deadline Alerts</label>
                  <div 
                    onClick={() => toggleSetting('notifications', 'deadlineAlerts')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.notifications.deadlineAlerts ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.notifications.deadlineAlerts ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy Settings */}
            <section id="privacy" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Lock className="mr-2" size={20} /> ---------
                Privacy & Security
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Data Collection</label>
                  <div 
                    onClick={() => toggleSetting('privacy', 'dataCollection')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.privacy.dataCollection ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.privacy.dataCollection ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Show Online Status</label>
                  <div 
                    onClick={() => toggleSetting('privacy', 'showOnlineStatus')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.privacy.showOnlineStatus ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.privacy.showOnlineStatus ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Two-Factor Authentication</label>
                  <div 
                    onClick={() => toggleSetting('privacy', 'twoFactorAuth')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.privacy.twoFactorAuth ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.privacy.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Productivity Settings */}
            <section id="productivity" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2" size={20} />
                Productivity
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Focus Mode</label>
                  <div 
                    onClick={() => toggleSetting('productivity', 'focusMode')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.productivity.focusMode ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.productivity.focusMode ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pomodoro Duration (minutes)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="60"
                    value={settings.productivity.pomodoroDuration}
                    onChange={(e) => handleSettingChange('productivity', 'pomodoroDuration', parseInt(e.target.value) || 25)}
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Break Duration (minutes)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="30"
                    value={settings.productivity.breakDuration}
                    onChange={(e) => handleSettingChange('productivity', 'breakDuration', parseInt(e.target.value) || 5)}
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Auto-Save</label>
                  <div 
                    onClick={() => toggleSetting('productivity', 'autoSave')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.productivity.autoSave ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.productivity.autoSave ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* System Settings */}
            <section id="system" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Smartphone className="mr-2" size={20} />
                System
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Language</label>
                  <select 
                    value={settings.system.language}
                    onChange={(e) => handleSettingChange('system', 'language', e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Sync Across Devices</label>
                  <div 
                    onClick={() => toggleSetting('system', 'syncAcrossDevices')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.system.syncAcrossDevices ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.system.syncAcrossDevices ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Offline Mode</label>
                  <div 
                    onClick={() => toggleSetting('system', 'offlineMode')}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${settings.system.offlineMode ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  >
                    <span 
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.system.offlineMode ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4">
              <button 
                onClick={resetSettings}
                className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <RotateCcw size={16} className="mr-2" /> Reset to Default
              </button>
              <button 
                onClick={saveSettings}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <Save size={16} className="mr-2" /> Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyUi_7;