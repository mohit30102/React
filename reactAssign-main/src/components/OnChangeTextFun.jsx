import { useState } from 'react';
import styles from './Cals.module.css';

const OnChangeTextFun = () => {
    const [change, setChange] = useState('');

    const handleChange = (e) => {
        setChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setChange('');
    }

    return (
        <div>
            <h1>Stateless Component</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.ip}
                    onChange={handleChange}
                    value={change}
                />
                <br />
                <button type="submit">Submit</button>
                <br /><br />
            </form>
            <div>
                <span>Current Value:</span>
                <span>{change}</span>
            </div><br /><br />
        </div>
    )
}

export default OnChangeTextFun;
