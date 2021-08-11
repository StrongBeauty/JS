import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { CurrencyState, CurrencyType } from '../../redux/currencyReducer';
import { Dispatch } from 'redux';
import {
    changeActionAC,
    changeCurrencyFieldAC,
    changeCurrentCurrencyAC,
    CurrencyReducersTypes,
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {
    selectAllStateValues,
} from "../../redux/selectors";

//const CurrencyEContainer: React.FC<TProps> = props => {

    /*const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
    setCurrencyAmount,
    setAction,
    changeCurrency,
    } = props;*/

    /*const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        changeActionAC,
        changeCurrencyFieldAC,
        changeCurrentCurrencyAC,
    } = props;*/

/*const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency,
} = props;*/

export const CurrencyEContainer: React.FC = () => {


    const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>()

    /*const currencies = useSelector(selectCurrencies)
    const currentCurrency = useSelector(selectCurrentCurrency)
    const isBuying = useSelector(selectIsBuying)
    const amountOfBYN = useSelector(selectAmountOfBYN)
    const amountOfCurrency = useSelector(selectAmountOfCurrency)*/

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = useSelector(selectAllStateValues)

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC(value, value));
                    //changeCurrencyFieldAC(value, value);
                    //setCurrencyAmount(value, value);
                } else {
                    dispatch(changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                    //changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    //setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                }
            } else {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC(value, value));
                    //changeCurrencyFieldAC(value, value)
                    //setCurrencyAmount(value, value);
                } else {
                    dispatch(changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                    //changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    //setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? changeActionAC(true) : changeActionAC(false);
        //e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && changeCurrentCurrencyAC(e.currentTarget.dataset.currency);
        //e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

/*const mapStateToProps = ( { currency } : {currency: CurrencyState} ): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};*/


/*const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) : any => {
    return {
        setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
            dispatch(changeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
        },
        setAction(isBuying: boolean) {
            dispatch(changeActionAC(isBuying));
        },
        changeCurrency(currency: string) {
            dispatch(changeCurrentCurrencyAC(currency));
        },
    };
}*/


//const connector = connect(mapStateToProps, {changeActionAC, changeCurrencyFieldAC, changeCurrentCurrencyAC});
//const connector = connect(mapStateToProps, mapDispatchToProps);
/*const connector = connect(mapStateToProps, {});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);*/

