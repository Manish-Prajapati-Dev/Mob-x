export default function Page3() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:'100%', backgroundColor: '#FFFDD0', }}>
            <div style={{ width: '50%', padding: '2%', margin: '2%',justifyContent:'center',alignItems:'flex-start',display:'flex',flexDirection:'column' }} >
                <div style={{ color: 'black', fontSize: 25, textAlign: 'left' }} >
                    Logo
                </div>
                <div style={{ color: 'black', fontSize: 15, textAlign: 'left' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
            <div style={{ width: '50%', padding: '15%', backgroundColor: '#FFFFFF',borderTopLeftRadius:250,borderBottomLeftRadius:250 }} >
                <div style={{ color: 'red', fontSize: 20, textAlign: 'left' }} >
                    UseFul Links
                </div>
                {["Home", "Services", "About Us", "Contact Us"].map((item) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} >
                            <div style={{ color: 'black', fontSize: 15, textAlign: 'left' }} >
                                '?'
                            </div>
                            <div style={{ color: '#000000', fontSize: 15, fontWeight: '500' }} >
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
