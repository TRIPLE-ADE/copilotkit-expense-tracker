"use client";

import { CopilotPopup } from "@copilotkit/react-ui";

import { ExpensesList } from "@/components/ExpenseList";
import { useExpenseHook } from "@/hooks/use-tasks";

import "@copilotkit/react-ui/styles.css";

export default function Home() {
  // Use the custom hook
  const { expenses, addExpense, deleteExpense, updateExpense } = useExpenseHook();

  return (
    <div>
      <ExpensesList
        addExpense={addExpense}
        deleteExpense={deleteExpense}
        expenses={expenses}
        updateExpense={updateExpense}
      />
      <CopilotPopup />
    </div>
  );
}
