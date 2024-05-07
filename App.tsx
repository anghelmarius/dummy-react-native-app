import AuthNavigator from './utils/AuthNavigator';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light"/>
      <AuthNavigator/>
    </QueryClientProvider>
  );
}
