import React from 'react';

export interface TableRowI {
    currency: string,
    value: number,
}

const Tablerow = React.memo(
    (props: TableRowI): JSX.Element => {

    const { currency, value } = props;

        return(
            <tr>
                <td>{currency.slice(3, 6)}</td>
                <td>{value.toFixed(2)}</td>
            </tr>
        )
    }
);

export default Tablerow;