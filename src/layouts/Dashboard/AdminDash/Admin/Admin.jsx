import useAuth from '../../../../utilities/useAuth';




const Admin = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>{user.displayName}</h1>
        </div>
    );
};

export default Admin;