import { useState } from 'react';

export default function Event() {
    const [check, setCheck] = useState(false)
    const handleform = (e) => {
        e.preventDefault()
        console.log(check)
    }

    const obj = [
        { id: 1, name: 'vikas', age: 20 },
        { id: 2, name: 'soni', age: 18 },

    ]

    const [login, setlogin] = useState(false);
    const handLogin = () => {
        setlogin(true);
    };
    const handLogout = () => {
        setlogin(false);
    };

    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };
    return (
        <>
            <>
                <form onSubmit={handleform}>
                    <label htmlFor="">Checkbox</label>
                    <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
                    <br /><br />
                    <button>submit</button>
                </form>
                <br /><br />
            </>
            <h5>array of object using list & keys.</h5><br />

            <ul>
                {obj.map(item => (
                    <li key={item.id}>
                        <li><b>ID:</b> {item.id}</li>
                        <li><b>Name:</b> {item.name}</li>
                        <li><b>Age:</b> {item.age}</li>
                        <br />
                    </li>
                ))}
            </ul>


            <h5>conditional rendering </h5>
            <>
                {login ? (
                    <>
                        <h4> Successful</h4>
                        <button className='btn_on' onClick={handLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <h4>Please Login</h4>
                        <button className='btn_off' onClick={handLogin}>Login</button>
                    </>
                )}
            </><br /><br />

            <h5> toggle button</h5>
            <>
                <button className='btn_off' onClick={handleToggle}>
                    {isOn ? 'yes' : 'No'}
                </button>
            </>
        </>
    );
}