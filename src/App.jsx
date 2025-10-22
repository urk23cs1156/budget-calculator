import { useState } from "react";

export default function BudgetCalculator() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBalance = () => {
    // Validate inputs
    if (
      !income ||
      !rent ||
      !food ||
      !transport ||
      !others ||
      income <= 0 ||
      rent < 0 ||
      food < 0 ||
      transport < 0 ||
      others < 0
    ) {
      alert("Please enter valid positive values for all fields!");
      return;
    }

    // Calculate remaining balance
    const totalExpenses =
      parseFloat(rent) +
      parseFloat(food) +
      parseFloat(transport) +
      parseFloat(others);
    const remaining = parseFloat(income) - totalExpenses;

    setBalance(remaining);

    // Display message based on balance
    if (remaining < 0) {
      setMessage("You are overspending!");
    } else {
      setMessage("Good job managing your expenses!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center" }}>💰 Budget Calculator</h2>

      <div style={styles.inputContainer}>
        <label>Monthly Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter income"
        />

        <label>Rent / EMI:</label>
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter rent"
        />

        <label>Food Expenses:</label>
        <input
          type="number"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food expenses"
        />

        <label>Transport Expenses:</label>
        <input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          placeholder="Enter transport expenses"
        />

        <label>Other Expenses:</label>
        <input
          type="number"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
          placeholder="Enter other expenses"
        />
      </div>

      <button onClick={calculateBalance} style={styles.button}>
        Calculate Balance
      </button>

      {balance !== null && (
        <div
          style={{
            ...styles.result,
            color: balance < 0 ? "red" : "green",
          }}
        >
          <h3>
            Remaining Balance: ₹{balance.toFixed(2)}
          </h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    width: "100%",
  },
  result: {
    marginTop: "15px",
    textAlign: "center",
  },
};
