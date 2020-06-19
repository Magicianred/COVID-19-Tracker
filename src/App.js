import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fechedData = await fetchData();

        this.setState({ data: fechedData });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                {/* <CountryPicker />
                <Chart /> */}
            </div>
        )
    }
}

export default App;