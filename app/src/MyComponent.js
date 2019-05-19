import React from 'react';

import {
    AccountData,
    ContractData,
    ContractForm
} from 'drizzle-react-components';

const MyComponent = () => (
    <div>
        <h2>Balance of first account</h2>
        <AccountData accountIndex={0} units={"ether"} precision={50} />


        <h2> getData()</h2>
        <ContractData contract="Storage" method="data" />

        <h2>CreateContract</h2>
        <ContractForm
            contract="Storage"
            method="set"
            labels={['new value of DATA']}/>

        <h2>setData()</h2>
        <ContractForm
            contract="Storage"
            method="set"
            labels={['new value of DATA']}/>
    </div>

);

export default MyComponent;
