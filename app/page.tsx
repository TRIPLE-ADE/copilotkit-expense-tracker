"use client";

import { CopilotPopup } from "@copilotkit/react-ui";

import { ExpensesList } from "@/components/ExpenseList";
import { useExpenseHook } from "@/hooks/use-tasks";

import "@copilotkit/react-ui/styles.css";
import { INSTRUCTIONS } from "@/constants/instructions";

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
      <CopilotPopup
        instructions={INSTRUCTIONS}
        labels={{
          title: "Expense Tracking Financial Assistant",
          initial: "How can I help you with your Finance Tracking?",
        }}
      />
    </div>
  );
}
