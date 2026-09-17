import { createContext, useMemo, useReducer, type Dispatch, type ReactNode } from 'react';
import {
	BudgetReducer,
	initialState,
	type BudgetActions,
	type BudgetState,
} from '../reducers/budget-reducer';

type BudgetContextProps = {
	state: BudgetState;
	dispatch: Dispatch<BudgetActions>;
	totalExpenses: number;
	remainingBudget: number;
};

type BudgetProviderProps = {
	children: ReactNode;
};

// creando el contexto (donde se guardan los datos) y genera el BudgetContext.Provider
export const BudgetContext = createContext<BudgetContextProps>(null!);

// creando el provider (de donde vienen los datos)
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
	const [state, dispatch] = useReducer(BudgetReducer, initialState);
	const totalExpenses = useMemo(
		() => state.expenses.reduce((total, expense) => expense.amount + total, 0),
		[state.expenses]
	);
	const remainingBudget = state.budget - totalExpenses;

	return (
		<BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainingBudget }}>
			{children}
		</BudgetContext.Provider>
	);
};
