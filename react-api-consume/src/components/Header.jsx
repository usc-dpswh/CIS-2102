const Header = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                marginBottom: '2rem'
            }}
        >
            <h1 style={{ margin: '0' }}>{props.header}</h1>
            <h3 style={{ margin: '0', fontWeight: '400' }}>LANUTAN, ACHILLE - 22103514</h3>
        </div>
    )
}

export default Header;