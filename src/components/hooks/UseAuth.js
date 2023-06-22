import { useSelector } from 'react-redux';
import {
    selectUserName,
    selectIsLoggedIn,
    selectIsRefreshing,
} from '../redux/auth/AuthSelectors';

export default function useAuth() {
    const user = useSelector(selectUserName);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    return {
        user,
        isLoggedIn,
        isRefreshing,
    };
}