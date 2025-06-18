import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/modern-js/runtime';

const ErrorBoundary = (info?: { error: { message: string } }) => {
    return (
        <div>
            <h2>Something went wrong while loading login remote app</h2>
            <pre style={{ color: 'red' }}>{info?.error.message}</pre>
        </div>
    );
};
const Loading = <div>Loading...</div>;
const LoginRemoteApp = createRemoteComponent({
    loader: () => loadRemote('loginRemote/app'),
    fallback: ErrorBoundary,
    loading: Loading,
});

const LoginRoute = () => {
    console.log('LoginRoute rendered', Math.random());
    return <LoginRemoteApp key='login' />;
};
export default LoginRoute;