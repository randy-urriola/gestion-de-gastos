import { createContext, useReducer, type Dispatch, type ReactNode } from 'react';
import {
	BudgetReducer,
	initialState,
	type BudgetActions,
	type BudgetState,
} from '../reducers/budget-reducer';

type BudgetContextProps = {
	state: BudgetState;
	dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
	children: ReactNode;
};

// creando el contexto (donde se guardan los datos) y genera el BudgetContext.Provider
export const BudgetContext = createContext<BudgetContextProps>(null!);

// creando el provider (de donde vienen los datos)
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
	const [state, dispatch] = useReducer(BudgetReducer, initialState);

	return (
		<BudgetContext.Provider value={{ state, dispatch }}>
			{children}
		</BudgetContext.Provider>
	);
};
