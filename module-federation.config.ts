import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'host',
    remotes: {
        loginRemote: 'loginRemote@http://localhost:3051/static/mf-manifest.json',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
})