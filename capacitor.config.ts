import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'SAS Test',
  webDir: 'dist/spa',
  server: {
    androidScheme: 'https'
  }
}

export default config
