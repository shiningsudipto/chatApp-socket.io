import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const SbUsers = () => {
    const users = [
        {
            image: '',
            name: 'Sample One',
            message: 'Last Message'
        },
        {
            image: '',
            name: 'Sample Two',
            message: 'Last Message'
        },
        {
            image: '',
            name: 'Sample Three',
            message: 'Last Message'
        },
        {
            image: '',
            name: 'Sample Four',
            message: 'Last Message'
        },
    ]
    return (
        <div className='sbUsersSection'>
            {
                users?.map((user, idx) => <div className='sbUsers' key={idx}>
                    <div className='sbUserAvatar'>
                        {/* <img src='' alt="" /> */}
                        <AccountCircleOutlinedIcon fontSize='large' />
                    </div>
                    <div>
                        <p className='sbUserName'>{user.name}</p>
                        <p className='sbUserMessage'>{user.message}</p>
                    </div>
                </div>)}
        </div>
    );
};

export default SbUsers;